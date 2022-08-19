import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

class User {
  constructor(private firstname:string,private secondname:string, private phone:string, private email:string, private password:string) {
  }
}

@Injectable()

export class HttpService {
  constructor(private http: HttpClient) {}

  postData(firstName:string, secondName:string,  phone:string,  email:string,  password:string){
    const user: User = new User(firstName, secondName, phone,email,password)
    return this.http.post('https://localhost:7085/api/users', user)
  }
}
