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
          <input type="text" placeholder="Имя">
          <input type="text" placeholder="Фамилия">
          <input type="text" placeholder="Телефон">
          <input type="text" placeholder="Email">
          <input type="text" placeholder="Пароль">
          <input type="text" placeholder="Подтвердите пароль">
            </div>
          <button>Зарегистрироваться</button>
        </div>
        <div class="basis-1/4 "></div>
      </div>
    </main>
  `,
  styles: [`
    .header {
      padding: 15%;
      color: white;
      font-family: Roboto, Arial, sans-serif;
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
  `]
})

export class RegistrationComponent {

}
