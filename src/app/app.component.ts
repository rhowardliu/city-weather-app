import { Component } from '@angular/core';
import { City } from './models/City'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'polybee';
  cities:City[];
  constructor(){}
  ngOnInit(){
    this.cities = this.getDefaultCities();
  }
  getDefaultCities(){
    return [
      new City, new City, new City, new City, new City, new City, new City, new City, new City, 
    ]
  }

}
