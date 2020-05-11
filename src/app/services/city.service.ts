import { Injectable } from '@angular/core';
import { City } from '../models/City';
import { WeatherService } from './weather.service'

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private weatherService:WeatherService) { }

  getDefaultCities(){
    return [
      new City, new City, new City, new City, new City, new City, new City, new City, new City, 
    ]
  }

  updateCity(city:City, cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe( res =>{
      city.name = cityName;
      city.weatherMain = res.weather[0].main;
      city.weatherDesc = res.weather[0].description;
      console.log(city);
    })
  }

}
