import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import 'hammerjs';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountriesService } from './services/countries.service';
import { CountrySelectorComponent } from './country-selector/country-selector.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  declarations: [ AppComponent, HelloComponent, CountrySelectorComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CountriesService]
})
export class AppModule { }
