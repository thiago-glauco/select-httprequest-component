import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})

export class CountrySelectorComponent implements OnInit {
  //The names string array receive the list of country names
  //and the countryName receives the selected country's name 
  names: string[];
  countryName: string;
  constructor( private countriesService: CountriesService ) { 
    //the countriesServices return an Observable from a HTTP request from
    //https://restcountries.eu/rest/v2/region/americas then we stract the name with the map.

    this.countriesService.getCountriesList( ).subscribe( (countries) => {
      this.names = countries.map( (country)=>{return country.name})
    });
  }

  ngOnInit() {

  }

}