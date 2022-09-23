import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  readonly BASE_URL = "https://dev.alocalo.de/";


  constructor(private https: HttpClient) { 
    this.https.post(this.BASE_URL + "/user-service/fusionAuth/login", {
      params: {
        email: "jan-niklas@reinhardt.de",
        password: "alocalo2022!"
      },
      observe: "response",
      header: "wIaJmwGxqP8h5m5SiBa2ymYln97qJlLpnq73VDQ9c6eUYNzWFOg6YCMI",
    })
    .toPromise()
    .then(res => {
      console.log(res);
    })
    .catch(console.log)
  }

  ngOnInit(): any{
    
  }

}
