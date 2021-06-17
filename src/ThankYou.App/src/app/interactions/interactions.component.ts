import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Interaction, InteractionService } from '@api';
import { InteractionPopupComponent } from '@shared/popups';
import { Subject } from 'rxjs';
import { map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.scss']
})
export class InteractionsComponent implements OnDestroy {

  private readonly _destroyed$ = new Subject();

  private readonly _refresh$ = new Subject();

  public vm$ = this._refresh$
  .pipe(
    startWith(true),
    switchMap(_ => this._interactionService.get()),
    map(interactions => ({ interactions }))
  )

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _interactionService: InteractionService
  ) { }

  handleDelete(interaction: Interaction) {
    this._interactionService.remove({ interaction })
    .pipe(
      takeUntil(this._destroyed$),
      tap(x => this._refresh$.next())
    ).subscribe();
  }

  public edit(interaction: Interaction) {
    this._dialog.open<InteractionPopupComponent>(InteractionPopupComponent, {
      data: { interaction }
    })
    .afterClosed()
    .pipe(
      takeUntil(this._destroyed$),
      tap(_ => this._refresh$.next())
    )
    .subscribe();
  }
  public create() {
    this._dialog.open<InteractionPopupComponent>(InteractionPopupComponent)
    .afterClosed()
    .pipe(
      takeUntil(this._destroyed$),
      tap(_ => this._refresh$.next())
    )
    .subscribe();
  }

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

}
