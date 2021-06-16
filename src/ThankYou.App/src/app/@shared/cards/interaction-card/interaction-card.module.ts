import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionCardComponent } from './interaction-card.component';
import { MaterialModule } from '@shared/material.module';
import { ReadonlyPillModule } from '@shared/pills';



@NgModule({
  declarations: [
    InteractionCardComponent
  ],
  exports: [
    InteractionCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReadonlyPillModule
  ]
})
export class InteractionCardModule { }
