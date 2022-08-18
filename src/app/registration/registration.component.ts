import {Component} from "@angular/core";


@Component({
  selector: 'reg-comp',
  template: `
    <main class="w-full h-full ng-blue-300 ">
      <div class="flex flex-row flex-nowrap justify-center place-items-center">
        <div class="basis-1/4 "></div>
        <div class="basis-1/2 text-center">
          <h2 class="text-5xl header " >Регистрация</h2>
            <div [class.input]=true>
          <input type="text" placeholder="Имя" [(ngModel)]="firstName">
          <input type="text" placeholder="Фамилия" [(ngModel)]='secondName'>
          <input type="text" placeholder="Телефон" [(ngModel)]='phone'>
          <input type="text" placeholder="Email" [(ngModel)]='email'>
          <input type="text" placeholder="Пароль" [(ngModel)]='password' [style.border]="!isInvisible? 'border: px solid red':'border: 4px solid orangered'">
          <input type="text" placeholder="Подтвердите пароль" [(ngModel)]='password2'>
            </div>
          <div [style.display]="isInvisible? 'none':''"><h2>Пароли не совпадают</h2></div>
          <button (click)='passwordChecker()'>Зарегистрироваться</button>
        </div>
        <div class="basis-1/4 ">
          <ul>
            <li>{{firstName}}</li>
            <li>{{secondName}}</li>
            <li>{{email}}</li>
            <li>{{phone}}</li>
            <li>{{password}}</li>
            <li>{{password2}}</li>
          </ul>
        </div>
      </div>
    </main>
  `,
  styles: [`
    .header {
      padding: 15%;
      color: white;
      font-family: Roboto, Arial, sans-serif;
      font-size: 30px;
      padding-top: 150px;
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
    button:hover {
      background-color: #2AA5A0;
      background-image: linear-gradient(90deg, #dc3b86, rgba(124, 67, 210, 0.87));
      cursor: pointer;
      font-size: 20px;
    }
    input {
      border-radius: 5px;
      height: 50px;
      width: 80%;
      color: white;
      border: 4px solid orangered;
      background-color: #a0529e;
      background-image: linear-gradient(90deg, rgb(56, 158, 184), rgba(219, 50, 216, 0.87));
      display: block;
      margin-top: 30px;
      margin-bottom: 30px;
      margin-left: 10%;
      margin-right: 10%;
    }

    .input {
      border: 4px solid orangered;
      border-radius: 25px;
    }
    h2{
      font-size: 20px;
      color: red;
    }
  `]
})

export class RegistrationComponent {
  firstName: string =''
  secondName: string =''
  email: string =''
  phone:string =''
  password: string =''
  password2: string =''
  isInvisible: boolean = true

  passwordChecker(){
    if(this.password2 != this.password){
      this.isInvisible = !this.isInvisible
    }
  }
}
