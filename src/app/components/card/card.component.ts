import { Component, OnInit, Input } from '@angular/core';
import { City } from "../../models/City";
import { WeatherService } from "../../services/weather.service";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() city:City;
  enterCity:boolean;
  searchNotFound:boolean;

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.enterCity = false;
    this.searchNotFound = false;
  }

  onEditCity(){
    this.enterCity = true;
    this.city.cityFound = false;
    this.searchNotFound = false;
  }
  
  onSearchCity(newInput:string){
    console.log('reached!');
    this.weatherService.getWeatherData(newInput).subscribe(res =>{
      this.city.name = res.name;
      this.city.weatherMain = res.weather[0].main;
      this.city.weatherDesc = res.weather[0].description;
      this.city.cityFound = true;
    }, err=>{
      console.log('not found')
      this.city.cityFound = false;
      this.searchNotFound = true;
    })
  }

  

}
