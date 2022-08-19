import { Component } from '@angular/core';


@Component({
  selector: 'main-comp',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']})

export class AppComponent {
  login: string ='';
  password: string = '';

  isInvisible: boolean = false


  invisChanger(){
    this.isInvisible = !this.isInvisible
  }
  checkAcc(){
    // Запрос к серверу
    //
  }
}
