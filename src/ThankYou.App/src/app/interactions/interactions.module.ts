import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionsRoutingModule } from './interactions-routing.module';
import { InteractionsComponent } from './interactions.component';
import { MaterialModule } from '@shared/material.module';


@NgModule({
  declarations: [
    InteractionsComponent
  ],
  imports: [
    CommonModule,
    InteractionsRoutingModule,
    MaterialModule
  ]
})
export class InteractionsModule { }
