import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators"
import { LoginData, UserInfo } from '../interface/user-info';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  logIn(): Observable<LoginData>{
    return this.http.get<LoginData>("https://dev.alocalo.de/user-service/fusionAuth/login", {
      params: {
        email: "jan-niklas@reinhardt.de",
        password: "alocalo2022!"
      }
      }).pipe(map(this.getToken))
    }

  private getToken(response: LoginData): LoginData {
    return {
      status: response.status,
      userInfo: {...response.userInfo}
      }
    }
}
    



