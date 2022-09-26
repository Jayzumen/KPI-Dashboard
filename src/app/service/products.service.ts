import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProducts(body: any): Observable<any> {
    return this.http.post<any>("https://dev.alocalo.de/product-service/find/products", body)
  }
}
