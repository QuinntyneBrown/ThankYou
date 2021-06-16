import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { baseUrl } from '@core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@shared/material.module';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatMomentDateModule,
    MatNativeDateModule
  ],
  providers: [
    {
      provide: baseUrl, useValue: 'https://localhost:5001/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
