import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Participant } from '@api';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent {
  @Input() public participant: Participant;
  @Output() public deleted: EventEmitter<any> = new EventEmitter();
}
