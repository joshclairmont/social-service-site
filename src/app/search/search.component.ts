import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.selectedServiceType = this.availableServiceTypes[0].view;
  }

  selectedServiceType: string; 
  availableServiceTypes = [
    { value: '*', view: 'All'},
    { value: 'food', view: 'Food'},
    { value: 'childcare', view: 'Child Care'},
    { value: 'alcohol', view: 'Alcohol'},
    { value: 'drugs', view: 'Drugs'},
    { value: 'psych', view: 'Psychiatric'}
  ]

}
