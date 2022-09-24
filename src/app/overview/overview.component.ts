import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginService } from './../service/login.service';
import { AccountsService } from './../service/accounts.service';
import { SalesService } from './../service/sales.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private accountService: AccountsService,
    private salesService: SalesService ) {}


  ngOnInit(): void {
    this.getLoginToken()
    this.getNumberOfAccounts()
    this.getListofSales()
  }

  getLoginToken(): void {
    this.loginService.getToken().subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
    )
  }

  getNumberOfAccounts(): void {
    this.accountService.getAccounts().subscribe(
      (res) => console.log(res),
      (error) => console.log(error),
    )
  }

  getListofSales(): void {
    this.salesService.getSales().subscribe(
      (res) => console.log(res),
      (error) => console.log(error),
    )
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

  

