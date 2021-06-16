import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantEditorComponent } from './participant-editor.component';
import { MaterialModule } from '@shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ParticipantEditorComponent
  ],
  exports: [
    ParticipantEditorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParticipantEditorModule { }
