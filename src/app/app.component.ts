import { Component } from '@angular/core';


@Component({
  selector: 'main-comp',
  template:
      `
    <main [style.display] = 'isInvisible? "none":"" '>
      <div [class.top] = 'true' class = 'text-base'>Вход</div>
      <div [class.Input]="true" [class.topInput] = 'true'>
        <input type="text" [value] = "login" placeholder="login" class = 'text-xl text-white'>
      </div>
      <div [class.Input]="true">
        <input type="text" [value] = "password" placeholder="password" class = 'text-xl text-white'>
      </div>
      <button [attr.display]="true" (click)="checkAcc()">Войти</button>
    </main>
    <footer [style.display] = 'isInvisible? "none":"" '><p><a (click)="invisChanger()" routerLink = 'registration'>Ещё не зарегистрированы? Создайте аккаунт!</a>
    </p>
    </footer>
    <router-outlet></router-outlet>
  `,
  styles: [`
    *{

    }
    main {
      width: 500px;
      height: 430px;
      text-align: center;
      border: 4px solid orangered;
      border-radius: 25px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -250px 0 0 -250px;
      color: white;
    }

    div {
      margin: 40px 155px 0 155px;
      border: 4px solid orangered;
      border-radius: 25px;
      height: 40px;
      font-size: 25px;
      text-align: center;
      color: black;

    }

    .Input {
      border: none;
      aling: center;
      margin-left: 125px;
      margin-right: 125px;
    }

    input {
      border-radius: 5px;
      height: 25px;
      width: 250px;
      color: white;
      border: 4px solid orangered;
      background-color: #2AA5A0;
      background-image: linear-gradient(90deg, #dc3b86, rgba(124, 67, 210, 0.87));
    }

    .topInput {
      margin-top: 60px;
    }

    button {
      margin-top: 75px;
      border: 4px solid orangered;
      border-radius: 16px;
      height: 35px;
      width: 250px;
      color: white;
      background-color: #2AA5A0;
      background-image: linear-gradient(90deg, #e3535d, #de40b2);
      font-size: 18px;
    }

    .top {
      color: white;
      font-family: Roboto, Arial, sans-serif;
      background-color: #2AA5A0;
      background-image: linear-gradient(90deg, #e3535d, #de40b2);
      text-align: center;
      padding-top: 5px;
    }

    button:hover {
      background-color: #2AA5A0;
      background-image: linear-gradient(90deg, #dc3b86, rgba(124, 67, 210, 0.87));
      cursor: pointer;
      font-size: 20px;
    }
    footer{
      margin-top: 750px;
      margin-left: 870px;
      color: white;
      font-family: Arial;
    }
    a:hover{
      cursor: pointer;
    }
  `]})

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
