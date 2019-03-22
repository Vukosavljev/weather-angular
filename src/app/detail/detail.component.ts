import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
  cityName = this.route.snapshot.paramMap.get('id');
  woeid = this.route.snapshot.paramMap.get('woeid');
  weather = [];

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private location: Location) { }

  backClicked() {
    this.location.back();
  }

  ngOnInit() {
    this.weatherService.getWeather(this.woeid)
      .subscribe(d => {
        this.weather = d.consolidated_weather.slice(0, 4  )
        console.log(this.weather);
      })
  }

}
