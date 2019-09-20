import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AutocompleteComponent } from './features/autocomplete/autocomplete.component';
import { MatFormFieldModule,
         MatInputModule,
         MatAutocompleteModule, 
         MatSelectModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectAutocompleteModule } from 'mat-select-autocomplete';
import { SelectAutocompleteComponent } from './features/select-autocomplete/select-autocomplete.component';
import { MatSelectSearchComponent } from './features/mat-select-search/mat-select-search.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    SelectAutocompleteComponent,
    MatSelectSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SelectAutocompleteModule,
    NgxMatSelectSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
