import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {RegistrationComponent} from "./registration/registration.component";
import {InputComponent} from "./input/input.component";
import {RegistrationModule} from "./registration/registration.module";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes =[
  {path: '', component: AppComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'enter', component: InputComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
