import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sales } from './../interface/sales';


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  

  constructor(private http: HttpClient) { }

  getSales(bearerToken: any, time: any): Observable<Sales>{
    return this.http.get<Sales>("https://dev.alocalo.de/billing-service/checkout-event/sales-value", {headers: bearerToken, params: time })
  }
}
