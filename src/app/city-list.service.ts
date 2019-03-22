import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CityModel } from './CityModel';

@Injectable({
  providedIn: 'root'
})

export class CityListService {
  //profy needed, without him does not work
  proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  apiUrl = 'https://www.metaweather.com/api/location/search/?query=';
  constructor(private http: HttpClient) { }
 
  getCities(city: string): Observable<CityModel[]> {
    return this.http.get<CityModel[]>(`${this.proxyUrl}${this.apiUrl}${city}`)
  }
}
