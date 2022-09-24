import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interface/user-info';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  getToken(): Observable<UserInfo[]>{
    return this.http.get<UserInfo[]>("https://dev.alocalo.de/user-service/fusionAuth/login", {
      params: {
        email: "jan-niklas@reinhardt.de",
        password: "alocalo2022!"
      }
    })
  }
}
