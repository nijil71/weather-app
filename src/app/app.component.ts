import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from './services/weatherservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherserviceService) {

    }
    city: string = 'London';
    weatherData: any;
  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.city = '';
  }

      onsubmit(){
        this.getWeatherData(this.city);
        this.city = '';

      }
      private getWeatherData(city: string) {
        this.weatherService.getWeather(city).subscribe(
          {
            next: (response) => {
              this.weatherData = response;
              console.log(response);
            }
          }
          
        ) 
      }
  
}
