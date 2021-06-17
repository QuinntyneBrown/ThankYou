import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantPopupComponent } from './participant-popup.component';
import { ParticipantEditorModule } from '@shared/participant-editor/participant-editor.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/material.module';



@NgModule({
  declarations: [
    ParticipantPopupComponent
  ],
  exports: [
    ParticipantPopupComponent
  ],
  imports: [
    CommonModule,
    ParticipantEditorModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class ParticipantPopupModule { }
