import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CountriesService {

//CountriesService just send a HTTP request for restcountries web services to get a list of countries.
//Http request observables executes only once, and it return the full list of countries
// inside an array instead of an observable array.
  private mainURL: string = 'https://restcountries.eu/rest/v2/region/americas';
  constructor( private http: HttpClient) { }

  getCountriesList() {
    let countriesList = this.http.get<any[]>(this.mainURL);

    console.log(countriesList);

    return countriesList;
  }
}