import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
   //template should probably not be used. templateUrl may be more useful here
 /*template: `
    <nav class='navbar navbar-expand navbar-dark bg-dark'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/tradeShift']">Trade Shift</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'George\'s Test Application';
}
