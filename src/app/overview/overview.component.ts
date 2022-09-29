import { Component, OnInit } from '@angular/core';
import { LoginService } from './../service/login.service';
import { AccountsService } from './../service/accounts.service';
import { SalesService } from './../service/sales.service';
import { LoginData } from './../interface/user-info';
import { Accounts } from '../interface/accounts';
import { Merchants} from './../interface/merchants';
import { Products} from './../interface/products';
import { MerchantsService } from './../service/merchants.service';
import { ProductsService } from './../service/products.service';
import { Sales } from './../interface/sales';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  loginData!: LoginData;
  accounts!: Accounts;
  totalMerchants!: Merchants;
  totalProducts!: Products;
  sales!: Sales;

  // start value of begin- and end-Month
  beginMonth: string = "2021-09";
  endMonth: string = "2022-09";


  // body for request of merchants and products
  private body: any = {
    "type": "QUERY",
    "query": ""
  }

  // time
  time: any = {}
  // My Bearer Token
  bearerToken: any = {};
  // 
  
 
  constructor(
    private loginService: LoginService,
    private accountService: AccountsService,
    private merchantsService: MerchantsService,
    private productsService: ProductsService,
    private salesService: SalesService,
     ) {}


    


  ngOnInit(): void {
    this.getLoginToken()
    this.getNumberOfAccounts()
    this.getNumberOfMerchants()
    // this.getNumberOfProducts()
    setTimeout(()=> {
      this.getListofSales()
    }, 1000)
  }



  // Login to server and get Token
  getLoginToken(): void {
    this.loginService.logIn().subscribe(
      (response: LoginData) => {
        // console.log(response);
        this.loginData = response;
        this.bearerToken = {
          "Authorization": `Bearer ${this.loginData.userInfo.token}`
        }
        // console.log(this.bearerToken)
      }
    )
  }

  // Get number of accounts
    getNumberOfAccounts(): void {
      this.accountService.getAccounts().subscribe(
        (response: Accounts) => {
          // console.log(response);
          this.accounts = response
        }
      )
    }

    // get number of merchants
    getNumberOfMerchants(): void {
      this.merchantsService.getMerchants(this.body).subscribe(
        (response: Merchants) => {
          // console.log(response);
          this.totalMerchants = response;
        }
      )
    }

    // get number of products
    getNumberOfProducts(): void {
      this.productsService.getProducts(this.body).subscribe(
        (response: Products) => {
          console.log(response);
          this.totalProducts = response;
        }
      )
    }

    // get the time
    getTime() {
      this.time = {
        "beginMonth": this.beginMonth + "-01",
        "endMonth": this.endMonth + "-01"
      }
    }

    // get sales value and provision
    getListofSales(): void {
      this.getTime()
      // console.log(this.time)
      this.salesService.getSales(this.bearerToken, this.time).subscribe(
        (response: Sales) => {
          console.log(response);
          this.sales = response;
        }
      )
    }

} 


  

