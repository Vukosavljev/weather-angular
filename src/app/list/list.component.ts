import { Component, OnInit, Input } from '@angular/core';
import { CityModel } from '../CityModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() cityList: CityModel[];

  clickHandler(result) {
    console.log(result);
  }
  constructor() { }


  ngOnInit() {
  }

}
