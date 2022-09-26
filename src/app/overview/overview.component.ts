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

  private body: any = {
    "type": "QUERY",
    "query": ""
  }
  
  loginData!: LoginData;
  accounts!: Accounts;
  totalMerchants!: Merchants;
  totalProducts!: any;


  

  constructor(
    private loginService: LoginService,
    private accountService: AccountsService,
    private merchantsService: MerchantsService,
    private productsService: ProductsService,
    private salesService: SalesService,
     ) {
      // this.salesService.bearerToken = this.myToken
     }


    // My Bearer Token
    public myToken: string = "";
    // 


  ngOnInit(): void {
    this.getLoginToken()
    this.getNumberOfAccounts()
    // this.onGetMerchants()
    // this.onGetProducts()
    // async () => {
      this.getListofSales()
    // } 
  }

  getLoginToken(): void {
    this.loginService.logIn().subscribe(
      (response: LoginData) => {
        console.log(response);
        this.loginData = response;
        this.myToken = this.loginData.userInfo.token;
      }
    )
  }

    getNumberOfAccounts(): void {
      this.accountService.getAccounts().subscribe(
        (response: Accounts) => {
          // console.log(response);
          this.accounts = response
        }
      )
    }

    onGetMerchants(): void {
      this.merchantsService.getMerchants(this.body).subscribe(
        (response: Merchants) => {
          // console.log(response);
          this.totalMerchants = response;
        }
      )
    }

    onGetProducts(): void {
      this.productsService.getProducts(this.body).subscribe(
        (response: any) => {
          console.log(response);
          // this.totalProducts = response;
        }
      )
    }


    getListofSales(): void {
      this.salesService.getSales().subscribe(
        (response: Sales) => {
          console.log(response);
          // console.log(this.salesService.bearerToken)
        }
      )
    }

} 


  

