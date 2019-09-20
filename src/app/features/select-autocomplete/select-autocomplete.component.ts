import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-autocomplete',
  templateUrl: './select-autocomplete.component.html',
  styleUrls: ['./select-autocomplete.component.scss']
})
export class SelectAutocompleteComponent implements OnInit {

  @ViewChild(SelectAutocompleteComponent, {static: true}) multiSelect: SelectAutocompleteComponent;

  options = [
    {
      display: 'One',
      value: '1'
    }, {
      display: 'Two',
      value: '2'
    }, {
      display: 'Three',
      value: '3'
    }, {
      display: 'Four',
      value: '4'
    }, {
      display: 'Five',
      value: '5'
    }, {
      display: 'Six',
      value: '6'
    }
  ];
  profileForm = new FormGroup({
    selected: new FormControl(['1', '2', '3'])
  });

  constructor() { }

  onToggleDropdown() {
    this.multiSelect.onToggleDropdown();
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  ngOnInit() {
  }

}
