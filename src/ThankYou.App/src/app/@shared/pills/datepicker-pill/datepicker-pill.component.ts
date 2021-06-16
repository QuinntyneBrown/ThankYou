import { AfterViewInit, Component, ElementRef, forwardRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { skip, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, fromEvent, of, Subject } from 'rxjs';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatCalendar } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-datepicker-pill',
  templateUrl: './datepicker-pill.component.html',
  styleUrls: ['./datepicker-pill.component.scss'],
  providers: [
    DatePipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerPillComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DatepickerPillComponent),
      multi: true
    }
  ],
  host: {
    '(click)':'menu?.openMenu()'
  }
})
export class DatepickerPillComponent<D> implements ControlValueAccessor,  Validator, OnDestroy, AfterViewInit  {
  private readonly _destroyed$: Subject<void> = new Subject();
  private readonly _value$: BehaviorSubject<any> = new BehaviorSubject(null);

  @ViewChild("menuTrigger", { static: true }) public menu: MatMenuTrigger | undefined;

  @ViewChild(MatCalendar, { static: true }) public calendar: MatCalendar<D> = null as any;

  public get displayValue$(): any {
    return this._value$.value == null
    ? of("Select Date")
    : of(this._datePipe.transform(this._value$.value,'MM/dd/YY'));
  }
  constructor(
    private readonly _elementRef: ElementRef,
    private readonly _datePipe: DatePipe
  ) { }

  ngAfterViewInit() {
    this.calendar.selectedChange
    .pipe(
      takeUntil(this._destroyed$),
      tap(x => this._value$.next(x))
    ).subscribe();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

  writeValue(obj: any): void {
    this._value$.next(obj);
  }

  registerOnChange(fn: any): void {
    this._value$
    .pipe(
      takeUntil(this._destroyed$),
      skip(1),
    ).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this._elementRef.nativeElement
      .querySelectorAll("*")
      .forEach((element: HTMLElement) => {
        fromEvent(element, "focus")
          .pipe(
            takeUntil(this._destroyed$),
            tap(x => fn())
          )
          .subscribe();
      });
  }

  setDisabledState?(isDisabled: boolean): void { }

  public ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
