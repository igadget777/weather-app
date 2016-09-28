import { Component, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ForecastService } from '../shared/services/forecast.service';
import { NgForm } from '@angular/forms';
import { CurrentForecast } from '../models/current-forecast.model';

@Component({
  selector: 'app-day-forecast',
  templateUrl: './day-forecast.component.html',
  styleUrls: ['./day-forecast.component.css']
})
export class DayForecastComponent implements OnInit {

  private forecastModel = new CurrentForecast('', '', '', 0, 0, 0, false);
  @Output()
  private searchItem: any = 90210;

  @Output()
  error: string = '';
  
  constructor(private _forecastService: ForecastService) {}

  private kelvinToFahrenheit(kelvinValue: number){
    var newTemp: number = 0;
    newTemp = (1.8 * (kelvinValue - 273.15)) + 32;    
    return Math.round(newTemp);
  }

  ngOnInit() {
    this._forecastService.getFiveDayForecast(this.searchItem)
                          
        .subscribe(
          (data) => {
            this.forecastModel = new CurrentForecast(
                            data.name,
                            data.weather[0].description,
                            data.weather[0].icon,
                            this.kelvinToFahrenheit(data.main.temp),
                            this.kelvinToFahrenheit(data.main.temp_max),
                            this.kelvinToFahrenheit(data.main.temp_min),
                            true
                            );
          },
          //(data) => console.log(data),
          //(error) => console.log('onError: %s', error),
          (error) => {
            this.error = 'Error retreiving forecast: '+ error
          },
          () => console.log('onCompleted')
          );
    
  }

  onSubmit(form: NgForm){
    console.log(form.value.searchItem);
    this._forecastService.getFiveDayForecast(form.value.searchItem)
                          
        .subscribe(
          (data) => {
            this.forecastModel = new CurrentForecast(
                            data.name,
                            data.weather[0].description,
                            data.weather[0].icon,
                            this.kelvinToFahrenheit(data.main.temp),
                            this.kelvinToFahrenheit(data.main.temp_max),
                            this.kelvinToFahrenheit(data.main.temp_min),
                            true
                            );
          },
          //(data) => console.log(data),
          // (error) => console.log('onError: %s', error),
          (error) => {
            this.error = 'Error retreiving forecast: '+ error
          },
          () => console.log('onCompleted')
          );    
  }

}
