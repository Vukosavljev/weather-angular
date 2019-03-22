import { Component, OnInit } from '@angular/core';
import { CityModel } from '../CityModel';
import { CityListService } from '../city-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  city: string;
  showSearch: boolean = false;
  submitSearch(city: string): void {
    this.showSearch = true;
    console.log(city);
  }

  results: CityModel[] = [
    {title: "london", location_type: "City", woeid: 21125, latt_long: "55.857800,-4.242510"},
    {title: "Dallas", location_type: "City", woeid: 238892 , latt_long: "32.778149,-96.795403"},
    {title: "Las Vegas", location_type: "City", woeid: 243670 ,latt_long: "36.171909,-115.139969"},
  ]

  constructor(
    private cityService: CityListService,
  ) { }

  ngOnInit() {
    this.cityService.getCities()
    // .then(res => console.log(res))
      // .subscribe(d => console.log(d))
    
  }

}
