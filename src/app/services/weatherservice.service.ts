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
   return this.http.get<weatherdata>('https://api.openweathermap.org/data/2.5/weather?appid=<your_key>',{params: {q: city, units: 'metric'}
    })


  }
}
