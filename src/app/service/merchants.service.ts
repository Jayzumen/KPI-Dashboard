import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Merchants} from '../interface/merchants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantsService {

  constructor(private http: HttpClient) { }

    getMerchants(body: any): Observable<Merchants> {
      return this.http.post<Merchants>("https://dev.alocalo.de/product-service/find/merchants", body)
    }
}
