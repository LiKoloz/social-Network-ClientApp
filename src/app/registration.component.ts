import {Component} from "@angular/core";

@Component({
  selector: 'reg-comp',
  template: `
    <main class="w-full h-full ng-blue-300 ">
      <div class="flex flex-row flex-nowrap justify-center place-items-center">
        <div class="basis-1/4 "></div>
        <div class="basis-1/2 text-center">
          <h2 class="text-5xl zagolovok">Регистрация</h2>
          <div>33</div>
        </div>
        <div class="basis-1/4 "></div>
      </div>
    </main>
  `,
  styles: [`
  .zagolovok{
    padding: 15%;
    color: white;
    font-family: Roboto, Arial, sans-serif;

    text-align: center;
  }
  `]
})

export class RegistrationComponent {

}
