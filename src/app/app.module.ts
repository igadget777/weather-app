import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ForecastComponent } from './forecast/forecast.component';
import { DayForecastComponent } from './day-forecast/day-forecast.component';

import { ForecastService } from './shared/services/forecast.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ForecastComponent,
    DayForecastComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
