import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accounts } from '../interface/accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Accounts>{
    const token = new HttpHeaders({"Authorization": "wIaJmwGxqP8h5m5SiBa2ymYln97qJlLpnq73VDQ9c6eUYNzWFOg6YCMI"})
    return this.http.get<Accounts>("https://dev-auth.alocalo.de/api/user/search", {
      headers: token,
      params: {
        queryString: "*",
      }
    })
  }
}
