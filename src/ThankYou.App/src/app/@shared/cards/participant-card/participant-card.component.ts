import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '@api';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss']
})
export class ParticipantCardComponent implements OnInit {


  @Input() public participant: Participant;

  constructor() { }

  ngOnInit(): void {
  }

}
