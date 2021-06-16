import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionPopupComponent } from './interaction-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/material.module';
import { ParticipantsSelectModule } from '@shared/participants-select/participants-select.module';
import { DatepickerPillModule } from '@shared/pills/datepicker-pill/datepicker-pill.module';



@NgModule({
  declarations: [
    InteractionPopupComponent
  ],
  exports: [
    InteractionPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ParticipantsSelectModule,
    DatepickerPillModule
  ]
})
export class InteractionPopupModule { }
