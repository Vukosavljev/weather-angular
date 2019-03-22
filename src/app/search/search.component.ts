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
  results: CityModel[];
  showSearch: boolean = false;
  submitSearch(city: string): void {
    this.showSearch = true;
    this.cityService.getCities(city)
      .subscribe(citylist => this.results = citylist);
  }
  

  constructor(private cityService: CityListService) { }

  ngOnInit() {}

}
