import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  openWeatherEndpoint:string = "http://api.openweathermap.org/data/2.5/weather"
  API_KEY = "b97b384d6d870d3ace24c8f953a0cdb8"
  constructor(private http:HttpClient) { }

  private getQueryURL(cityname:string):string{
    return `${this.openWeatherEndpoint}?q=${cityname}&appid=${this.API_KEY}`
  }

  getWeatherData(cityname:string):Observable<any>{
    return this.http.get(this.getQueryURL(cityname));
  }

}
