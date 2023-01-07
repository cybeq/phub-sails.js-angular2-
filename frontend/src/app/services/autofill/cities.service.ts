import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as L from 'leaflet';
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http:HttpClient) { }

  public autofill(city:any){
    const url = 'https://nominatim.openstreetmap.org/search';
    const params = {
      q: `${city}`,
      format: 'json',
      limit: 10,
      countrycodes: 'pl',
      place_type: 'city',
      'accept-language':'pl'

    };

    return this.http.get(url, { params, headers: { 'Accept-Language': 'en-US' } });


  }
}
