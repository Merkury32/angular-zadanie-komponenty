import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-succes-alert',
  templateUrl: './succes-alert.component.html',
  styles: [
    `
    p{
      background: lightgreen;
      padding: 30px;
      border: 1px solid green;
    }
    `
  ]
})
export class SuccesAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
