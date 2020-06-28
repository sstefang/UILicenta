import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { MemberModule } from './members/member.module';
import {DashboardComponent, SafePipe} from './dashboard/dashboard.component';
import { AngularCesiumModule } from 'angular-cesium';
import { AngularCesiumWidgetsModule } from 'angular-cesium';
import { CesiumComponent } from './cesium/cesium.component';
import { ServerLoginComponent } from './server-login/server-login.component';
import { PolylineComponent } from './polyline/polyline.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    SafePipe,
    CesiumComponent,
    ServerLoginComponent,
    PolylineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cesium', component: CesiumComponent },
      { path: 'server', component: ServerLoginComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    MemberModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
