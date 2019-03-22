import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { CityModel } from './CityModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CityListService {

  constructor(
    private http: HttpClient,
  ) { }

  



  // : Observable<CityModel[]>
  getCities() {
    return 1
  }



}
