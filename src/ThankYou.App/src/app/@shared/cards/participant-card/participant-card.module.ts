import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantCardComponent } from './participant-card.component';
import { MaterialModule } from '@shared/material.module';



@NgModule({
  declarations: [
    ParticipantCardComponent
  ],
  exports: [
    ParticipantCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ParticipantCardModule { }
