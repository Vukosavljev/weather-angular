import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  cityName = this.route.snapshot.paramMap.get('id');
  weather = [];

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
  ) { }

  ngOnInit() {
    this.weatherService.getWeather(this.cityName)
      // .then(d => this.weather = d.consolidated_weather.slice(0, 3))
    
    console.log(this.cityName)
  }

}
