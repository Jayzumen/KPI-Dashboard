import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sales } from './../interface/sales';


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  bearerToken: string = "";
  

  constructor(private http: HttpClient) { }

  getSales(): Observable<Sales>{
    const bearerToken = new HttpHeaders({"Authorization": `Bearer ${this.bearerToken}`})
    const Time = new HttpParams().set("beginMonth", "2022-01-01").set("endMonth", "2022-02-02")
    return this.http.get<Sales>("https://dev.alocalo.de/billing-service/checkout-event/sales-value", {headers: bearerToken, params: Time })
  }
}
