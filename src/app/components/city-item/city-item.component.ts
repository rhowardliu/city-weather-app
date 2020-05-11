import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../models/City'
import { CityService } from "../../services/city.service";
// import { createInput } from '@angular/compiler/src/core';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
  @Input() city:City;

  constructor(private cityService:CityService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      default:this.city.default,
      card: true
    }
    return classes;
  }

  onEnter(city:City, newInput){
    this.cityService.updateCity(city, newInput.value);
    newInput.value = null;
  }

}
