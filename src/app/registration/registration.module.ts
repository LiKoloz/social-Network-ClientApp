import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RegistrationComponent} from "./registration.component";
import {RegistrationService} from "./registration.service";

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
  providers: [
    RegistrationService
  ],
})

export class RegistrationModule {

}
