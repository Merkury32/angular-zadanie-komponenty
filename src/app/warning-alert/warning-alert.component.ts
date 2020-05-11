import {Component} from '@angular/core';
@Component({
    selector: 'app-warning-alert',
    template: `<p>Warning</p>`,
    styles: [
        `
        p{
          background: red;
          padding: 30px;
          border: 1px solid red;
        }
       `]
})
export class WarningAlertComponent{

}