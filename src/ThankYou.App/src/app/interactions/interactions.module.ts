import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionsRoutingModule } from './interactions-routing.module';
import { InteractionsComponent } from './interactions.component';


@NgModule({
  declarations: [
    InteractionsComponent
  ],
  imports: [
    CommonModule,
    InteractionsRoutingModule
  ]
})
export class InteractionsModule { }
