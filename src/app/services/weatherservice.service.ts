import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weatherdata } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http: HttpClient) { }
  getWeather(city: string):Observable<weatherdata> {
   return this.http.get<weatherdata>('https://api.openweathermap.org/data/2.5/weather?appid=5c1b7fbd337b6cda26275971cdfd4a15',{params: {q: city, units: 'metric'}
    })


  }
}
