import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
