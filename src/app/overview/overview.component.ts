import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  readonly MERCHANT_URL = "https://dev.alocalo.de/product-service/find/merchants";

  constructor(private https: HttpClient) { 
  let bearerToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlNPUE1BV1pZMWZDakE0elVJd0R0bnFIZlJWcyJ9.eyJhdWQiOiIwNzQ5NWFlMC0wNmE4LTQ2YjgtOWU3NC00ZmVjNmY1M2ZkNmUiLCJleHAiOjE2NjM5Nzg0MzEsImlhdCI6MTY2Mzk0MjQzMSwiaXNzIjoiaHR0cHM6Ly9kZXYtYXV0aC5hbG9jYWxvLmRlIiwic3ViIjoiYTVmM2ViOWItODJhYi00YjAwLWJiM2UtNTM4NWQzNDYyOWZlIiwianRpIjoiODg2YTE3MjMtMzQ0Ny00NDEyLTk2ZWItOTk2MzM0NTk4NzhiIiwiYXV0aGVudGljYXRpb25UeXBlIjoiUEFTU1dPUkQiLCJlbWFpbCI6Imphbi1uaWtsYXNAcmVpbmhhcmR0LmRlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImFwcGxpY2F0aW9uSWQiOiIwNzQ5NWFlMC0wNmE4LTQ2YjgtOWU3NC00ZmVjNmY1M2ZkNmUiLCJyb2xlcyI6WyJhbG9jYWxvX2FkbWluIiwidXNlciJdLCJzaWQiOiJlNDZhZDNiZC1iMjg2LTRiN2EtOTVkOS0yOGRhMmM3MTkzODUiLCJhdXRoX3RpbWUiOjE2NjM5NDI0MzEsInRpZCI6ImZkNDFlZmMxLTI1YjUtNmM0MC00ZWNjLTQ0NGQ5YmRiMjBlYyJ9.XfpNWy2JDFM2XXYA359tiueBk1uRJUG4OjxGEuWw2JlbqDV30IczuGVFytHTpJXEPAN4FH7SAnRK0jzC3s1O6fnGfyfNoPBuSpQZvGHWscyJ9wJIxbrT5CQdwISK8SFsOFuqAe85-6LlpgI8W9QUqMsdePw09nro1f4ofeQ1555XhvXwlY4IN0ZZpYfo8TcAb9OJvXtnOJnFc2OPO78Zquemao65vvWRL6sIvkwKIFarAF6eqNX3DCXSi5tbz4L_k0-VSWUplYuW7JfU3xnVUCx-yfETI-ys6X9fYME14gzrMi_07Hlsa2G6_0DkTY_kkJmzrGWgq4FKQi-Nro6RNw"

    this.https.get(this.MERCHANT_URL, {
        
    })
    .toPromise()
    .then(res => {
      console.log(res);
    })
    .catch(console.log)
  }

  ngOnInit(): void {
    
  }
  }

  // // Gesamtanzahl Verkäufe
  // get:https://dev.alocalo.de/billing-service/checkout-event/sales-value
  // params: {
  //   beginMonth: 2022-01-01;
  //   endMonth: 2022-01-01;
  // }
  // headers: {
  //   Authorization: `Bearer ${bearerToken}`
  // }

  // // Anzahl Accounts 
  // get:https://dev-auth.alocalo.de/api/user/search
  // params: {
  //   queryString: *
  // }
  // header: {
  //   Authorization: "wIaJmwGxqP8h5m5SiBa2ymYln97qJlLpnq73VDQ9c6eUYNzWFOg6YCMI"
  // }

  

