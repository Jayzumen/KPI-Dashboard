import { Component, OnInit } from '@angular/core';
import { LoginService } from './../service/login.service';
import { AccountsService } from './../service/accounts.service';
import { SalesService } from './../service/sales.service';
import { LoginData } from './../interface/user-info';
import { Accounts } from '../interface/accounts';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  
  loginData!: LoginData;
  accounts!: Accounts;


  // My Bearer Token
  public myToken: string = "";
  // 

  constructor(
    private loginService: LoginService,
    private accountService: AccountsService,
    private salesService: SalesService ) {}


  ngOnInit(): void {
    this.getLoginToken()
    this.getNumberOfAccounts()
    // this.getListofSales()
  }

  getLoginToken(): void {
    this.loginService.logIn().subscribe(
      (results: LoginData) => {
        // console.log(results);
        this.loginData = results;
        this.myToken = this.loginData.userInfo.token;
      }
    )
  }

    getNumberOfAccounts(): void {
      this.accountService.getAccounts().subscribe(
        (result: Accounts) => {
          // console.log(result);
          this.accounts = result
        }
      )
    }

    // getMerchants(): void {
    //   this.
    // }


  // getListofSales(): void {
  //   this.salesService.getSales().subscribe(
  //     (res) => console.log(res),
  //     (error) => console.log(error),
  //   )
  // }

} 


  

