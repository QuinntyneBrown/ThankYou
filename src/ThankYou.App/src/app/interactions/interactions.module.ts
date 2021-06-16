import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionsRoutingModule } from './interactions-routing.module';
import { InteractionsComponent } from './interactions.component';
import { MaterialModule } from '@shared/material.module';
import { InteractionCardModule } from '@shared/cards/interaction-card/interaction-card.module';


@NgModule({
  declarations: [
    InteractionsComponent
  ],
  imports: [
    CommonModule,
    InteractionsRoutingModule,
    MaterialModule,
    InteractionCardModule
  ]
})
export class InteractionsModule { }
