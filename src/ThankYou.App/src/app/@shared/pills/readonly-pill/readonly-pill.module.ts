import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadonlyPillComponent } from './readonly-pill.component';



@NgModule({
  declarations: [
    ReadonlyPillComponent
  ],
  exports: [
    ReadonlyPillComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReadonlyPillModule { }
