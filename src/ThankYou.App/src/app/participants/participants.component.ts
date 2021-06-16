import { Component } from '@angular/core';
import { Participant, ParticipantService } from '@api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent {

  public participants$: Observable<Participant[]> = this._participantService.get();

  constructor(
    private readonly _participantService: ParticipantService
  ) {

  }

}
