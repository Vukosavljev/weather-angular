import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  apiUrl = 'https://www.metaweather.com/api/location/';

  constructor(private http: HttpClient) { }

  getWeather(woeid: string): Observable<any> {
    return this.http.get(`${this.proxyUrl}${this.apiUrl}${woeid}/`);
  }
}
