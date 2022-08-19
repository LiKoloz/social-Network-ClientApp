import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {RegistrationComponent} from "./registration/registration.component";
import {MainPageComponent} from "../input/mainPage.component";
import {RegistrationModule} from "./registration/registration.module";
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "./http.service";

const appRoutes: Routes =[
  {path: '', component: AppComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'enter', component: MainPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
