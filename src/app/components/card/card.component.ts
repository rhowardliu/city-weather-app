import { Component, OnInit, Input } from '@angular/core';
import { City } from "../../models/City";
import { WeatherService } from "../../services/weather.service";
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() city:City;
  enterCity:boolean;
  searchNotFound:boolean;
  bgimg:string = '';
  backgroundURL:string = "../../../assets/images/";
  weatherImages = {
    clear:"sunny",
    clouds:"cloudy",
    rain:"rainy",
    dust:"dust"
  };




  constructor(private weatherService:WeatherService) { }

  
  ngOnInit(): void {
    this.enterCity = false;
    this.searchNotFound = false;
  }

  onEditCity(){
    this.enterCity = true;
    this.city.cityFound = false;
    this.searchNotFound = false;
    this.bgimg = '';
  }
  

  private getBackgroundSrc(weather:string):string{
    return `${this.backgroundURL}${this.weatherImages[weather.toLowerCase()]}.svg`
  }

  onSearchCity(newInput:string){
    interval(30 * 1000).pipe(
      startWith(0),
      switchMap(()=>this.weatherService.getWeatherData(newInput))
    )
    .subscribe(res =>{
      this.city.name = res.name;
      this.city.weatherMain = res.weather[0].main;
      this.city.weatherDesc = res.weather[0].description;
      this.city.cityFound = true;
      this.bgimg = `url(${this.getBackgroundSrc(this.city.weatherMain)})`;
    }, err=>{
      this.city.cityFound = false;
      this.searchNotFound = true;
    })
  }

  

}
