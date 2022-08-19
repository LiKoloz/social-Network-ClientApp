import {Component} from "@angular/core";


@Component({
  selector: 'main-comp',
  template:
      `
    <div>
      <main>

        <div class = 'flex items-center'>
          <a routerLint="/enter"><div class ='button'>Войти</div></a>
          <a routerLint="/registration"><div class = 'button'>Зарегистрироваться</div></a>
        </div>
      </main>
      <router-outlet></router-outlet>
    </div>
  `,
styles: [`
  .button{
    margin-top: 75px;
    border: 4px solid orangered;
    border-radius: 16px;
    height: 35px;
    width: 250px;
    color: white;
    background-color: #2AA5A0;
    background-image: linear-gradient(90deg, #e3535d, #de40b2);
    font-size: 18px;
    text-align: center;
  }
  .button:hover {
    background-color: #2AA5A0;
    background-image: linear-gradient(90deg, #dc3b86, rgba(124, 67, 210, 0.87));
    cursor: pointer;
    font-size: 20px;
  }
  `]})



export class MainPageComponent {
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
