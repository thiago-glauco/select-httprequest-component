import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import 'hammerjs';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountriesService } from './services/countries.service';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ForbiddenNameDirective } from './common/forbidden-name.directive';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [ AppComponent, HelloComponent, CountrySelectorComponent, TemplateFormComponent, ForbiddenNameDirective ],
  bootstrap:    [ AppComponent ],
  providers: [CountriesService]
})
export class AppModule { }
