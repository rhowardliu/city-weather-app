import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../../models/City'
import { CardComponent } from '../card/card.component';
// import { createInput } from '@angular/compiler/src/core';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
  @Input() city:City;
  @Output() editCity = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.editCity.emit();

  }

  // setClasses() {
  //   let classes = {
  //     default:this.city.default,
  //     card: true
  //   }
  //   return classes;
  // }


}
