import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from  'rxjs/Rx';

@Injectable()
export class ForecastService {
  
  //Register and get a free key from Open Weather API
  //Assign key to variable "apiKey""
  private apiKey: string = '';

  constructor(private _http: Http) { }

  getFiveDayForecast(zipCode: any){
    
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+zipCode+
              '&units=imperial,us&mode=json&appid='+this.apiKey;
    
    return this._http.get(url)
                //.flatMap((data) => data.json());
                .map((resp: Response) => resp.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));   
  }

  // private handleError(error: any){
  //   console.log(error);
  //   return Observable.throw(error.json().error);
  // }
}
