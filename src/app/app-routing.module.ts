import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutocompleteComponent } from './features/autocomplete/autocomplete.component';
import { SelectAutocompleteComponent } from './features/select-autocomplete/select-autocomplete.component';
import { MatSelectSearchComponent } from './features/mat-select-search/mat-select-search.component';


const routes: Routes = [
  {
    path: 'autocomplete', component: AutocompleteComponent
  },
  {
    path: 'select-autocomplete', component: SelectAutocompleteComponent
  },
  {
    path: 'select-search', component: MatSelectSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
