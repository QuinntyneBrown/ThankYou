import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InteractionService, ParticipantService } from '@api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-interaction-popup',
  templateUrl: './interaction-popup.component.html',
  styleUrls: ['./interaction-popup.component.scss']
})
export class InteractionPopupComponent implements OnInit, OnDestroy {

  private readonly _destroyed$ = new Subject();

  public participants$ = this._participantService.get();

  public form = new FormGroup({
    date: new FormControl(null, []),
    interactionId: new FormControl(null,[]),
    participants: new FormControl(null, []),
    description: new FormControl(null,[])
  });

  constructor(
    private readonly _dialogRef: MatDialogRef<InteractionPopupComponent>,
    private readonly _participantService: ParticipantService,
    private readonly _interactionService: InteractionService,
    @Inject(MAT_DIALOG_DATA) private readonly _data:any
  ) { }

  ngOnInit() {
    if(this.interaction.interactionId) {
      this.form.patchValue(this.interaction, { emitEvent: false })
    }
  }

  public get interaction() {
    return this._data?.interaction || {};
  }

  public save() {
    const interaction = this.form.value;

    const obs$ = interaction.interactionId

    ? this._interactionService.update({ interaction }) :

    this._interactionService.create({ interaction })

    obs$.pipe(
      takeUntil(this._destroyed$)
    ).subscribe(_ => this._dialogRef.close())

  }

  public cancel() {
    this._dialogRef.close();
  }

  public ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
