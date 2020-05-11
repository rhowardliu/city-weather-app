import { Component } from '@angular/core';
import { City } from './models/City'
import {CityService} from './services/city.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'polybee';
  cities:City[];
  constructor(private cityService:CityService){}
  ngOnInit(){
    this.cities = this.cityService.getDefaultCities();
  }

}
