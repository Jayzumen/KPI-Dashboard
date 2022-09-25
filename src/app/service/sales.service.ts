import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sales } from './../interface/sales';


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  
  readonly Token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlNPUE1BV1pZMWZDakE0elVJd0R0bnFIZlJWcyJ9.eyJhdWQiOiIwNzQ5NWFlMC0wNmE4LTQ2YjgtOWU3NC00ZmVjNmY1M2ZkNmUiLCJleHAiOjE2NjQwNzMxOTEsImlhdCI6MTY2NDAzNzE5MSwiaXNzIjoiaHR0cHM6Ly9kZXYtYXV0aC5hbG9jYWxvLmRlIiwic3ViIjoiYTVmM2ViOWItODJhYi00YjAwLWJiM2UtNTM4NWQzNDYyOWZlIiwianRpIjoiOGI5NTQwN2YtODFjYi00ODFjLWE2N2UtYjMxMDExMDk3YjNjIiwiYXV0aGVudGljYXRpb25UeXBlIjoiUEFTU1dPUkQiLCJlbWFpbCI6Imphbi1uaWtsYXNAcmVpbmhhcmR0LmRlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImFwcGxpY2F0aW9uSWQiOiIwNzQ5NWFlMC0wNmE4LTQ2YjgtOWU3NC00ZmVjNmY1M2ZkNmUiLCJyb2xlcyI6WyJhbG9jYWxvX2FkbWluIiwidXNlciJdLCJzaWQiOiI1MTNjM2Q0NC1jYTI0LTRlOTYtODkwZC0wZGI2OGExOTBkZmQiLCJhdXRoX3RpbWUiOjE2NjQwMzcxOTEsInRpZCI6ImZkNDFlZmMxLTI1YjUtNmM0MC00ZWNjLTQ0NGQ5YmRiMjBlYyJ9.fkA9WFOpOSEVxsPtnjFuJ5hq5qvfom1-CuyjQrBfa9xho-Dq31kKLTw_MVe_aw0QHN7YLZhNP6HTh33ZyzDzfXC-GLyEORYXx7Qw82pJOKzVhOXXHlKW2TNE6gDcnG_IdmGmLo8wOFAgLAxkVk21VY6sdlka-0EUgk_So9jhiT29Q2jswV6g31PyhfZi5Ikbj5JLdvOOary3KqSwA8mlrDfOb793gbhJhn0DpqWTBN0Y2iX6_n-B7y1JY8aXmKxehag8Ofchrny068MeqApC0HAfuAJCRaNsqnE0IwU6UGNGJYIKXVrDxOVySurlT8-o_byu2WeWKIQemkRdNy0wWA"

  constructor(private http: HttpClient) { }

  getSales(): Observable<Sales[]>{
    const bearerToken = new HttpHeaders({"Authorization": `Bearer ${this.Token}`})
    const Time = new HttpParams().set("beginMonth", "2022-01-01").set("endMonth", "2022-02-02")
    return this.http.get<Sales[]>("https://dev.alocalo.de/billing-service/checkout-event/sales-value", {headers: bearerToken, params: Time })
  }
}
