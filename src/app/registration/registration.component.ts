import {Component} from "@angular/core";


@Component({
  selector: 'reg-comp',
  templateUrl: `/registration.component.html`,
  styleUrls: ['/registration.component.css']
})

export class RegistrationComponent {
  firstName: string =''
  secondName: string =''
  age:number = 0
  email: string =''
  phone:string =''
  password: string =''
  password2: string =''
  isInvisible: boolean = true

  passwordChecker(){
    if(this.password2 != this.password){
      this.isInvisible = !this.isInvisible
    }
    else  this.isInvisible = true
  }
}
