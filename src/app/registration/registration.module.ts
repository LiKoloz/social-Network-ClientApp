import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RegistrationComponent} from "./registration.component";
import {HttpService} from "../http.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    RegistrationComponent
  ],
  exports: [
    RegistrationComponent
  ],
})

export class RegistrationModule {

}
