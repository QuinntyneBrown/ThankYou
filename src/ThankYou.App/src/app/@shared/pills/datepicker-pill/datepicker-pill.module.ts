import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatNativeDateModule } from "@angular/material/core";
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS, MatMomentDateModule } from "@angular/material-moment-adapter";
import { DatepickerPillComponent } from './datepicker-pill.component';

@NgModule({
  declarations: [
    DatepickerPillComponent
  ],
  exports: [
    DatepickerPillComponent,
    MatMomentDateModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatMomentDateModule,
    MatNativeDateModule
  ]
})
export class DatepickerPillModule { }
