import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blank-item',
  templateUrl: './blank-item.component.html',
  styleUrls: ['./blank-item.component.css']
})
export class BlankItemComponent implements OnInit {
  @Input() enterCity:boolean;
  @Input() searchNotFound:boolean;
  @Output() searchCity = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onEnter(cityInput){
    this.searchCity.emit(cityInput.value);
  }

  onClickBlank(){
    this.enterCity = true;
  }

}
