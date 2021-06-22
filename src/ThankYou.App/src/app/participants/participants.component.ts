import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Participant, ParticipantService } from '@api';
import { ParticipantPopupComponent } from '@shared';
import { Observable, Subject } from 'rxjs';
import { map, startWith, switchMap, takeUntil, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnDestroy {

  private readonly _destroyed$ = new Subject();

  private readonly _refresh$ = new Subject();

  public vm$ = this._refresh$
  .pipe(
    startWith(true),
    switchMap(_ => this._participantService.get()),
    map(participants => ({ participants }))
  );

  public participantControl = new FormControl(null, []);

  constructor(
    private readonly _participantService: ParticipantService,
    private readonly _dialog: MatDialog
  ) { }


  handleDelete(participant: Participant) {
    this._participantService.remove({ participant })
    .pipe(
      takeUntil(this._destroyed$),
      tap(x => this._refresh$.next())
    ).subscribe();
  }

  public create() {
    this._dialog.open<ParticipantPopupComponent>(ParticipantPopupComponent,{
      autoFocus: false
    })
    .afterClosed()
    .pipe(
      takeUntil(this._destroyed$)
    )
    .subscribe();
  }

  public save() {
    const participant = this.participantControl.value;

    this._participantService.create({ participant })
    .pipe(
      takeUntil(this._destroyed$),
      tap(_ => this._refresh$.next()),
      tap(_ => this.participantControl.reset())
    )
    .subscribe()
  }

  public cancel() {
    this.participantControl.reset();
    this.participantControl.markAsPristine();
  }

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
