import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsSelectComponent } from './participants-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/material.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ParticipantsSelectComponent
  ],
  exports: [
    ParticipantsSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class ParticipantsSelectModule { }
