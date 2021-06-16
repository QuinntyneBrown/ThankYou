import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsRoutingModule } from './participants-routing.module';
import { ParticipantsComponent } from './participants.component';
import { ParticipantEditorModule } from '@shared/participant-editor/participant-editor.module';
import { MaterialModule } from '@shared/material.module';
import { ParticipantCardModule } from '@shared/cards/participant-card/participant-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParticipantsComponent
  ],
  imports: [
    CommonModule,
    ParticipantEditorModule,
    ParticipantsRoutingModule,
    MaterialModule,
    ParticipantCardModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ParticipantsModule { }
