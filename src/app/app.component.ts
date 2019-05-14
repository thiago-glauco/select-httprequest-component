import { Component } from '@angular/core';
import {CountriesService} from './services/countries.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  names: string[];
  countries;
  constructor( private countriesService: CountriesService) {
    this.getCountries();
  }

  getCountries( ) {
    this.countries = this.countriesService.getCountriesList( );
    this.countries.subscribe( (item) =>
      { this.names = item.map((country) => {console.log(country.name); return country.name} )});
    }
}
