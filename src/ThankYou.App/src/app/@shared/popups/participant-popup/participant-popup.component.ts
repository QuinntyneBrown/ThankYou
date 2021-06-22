import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-participant-popup',
  templateUrl: './participant-popup.component.html',
  styleUrls: ['./participant-popup.component.scss']
})
export class ParticipantPopupComponent  {

  public formControl: FormControl = new FormControl(null,[]);
  public save() {

  }

  public cancel() {

  }
}
