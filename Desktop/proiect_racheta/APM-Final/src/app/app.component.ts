import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/members']">Team Members</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/server']">Server Login</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/dashboard']" >Dashboard</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/cesium']">Cesium Simulation</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'DiplomaProject: Stefan-Sorin Gheti';
  name = 'Angular';
  cesiumLoaded = true;
  Cesium = Cesium;
  ngOnInit() {
    console.log('load main map')
  }

}
