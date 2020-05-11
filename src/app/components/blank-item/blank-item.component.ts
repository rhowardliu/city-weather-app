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
  visibility:string;
  constructor() { }

  ngOnInit(): void {
    this.visibility = "invisible";
  }

  onEnter(cityInput){
    this.searchCity.emit(cityInput.value);
    cityInput.value = '';
  }

  onClickBlank(){
    this.enterCity = true;
  }

  changeStyle($event){
    this.visibility = $event.type == 'mouseover' ? 'visible' : 'invisible';
  }


}
