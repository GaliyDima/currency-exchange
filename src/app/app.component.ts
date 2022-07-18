import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';
import { CurrtncyapiService } from './headerapi.service';
import { DOCUMENT } from '@angular/common';
export interface launchResponse {
    
  status: number;
  url: string;
  token: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   @ViewChild('inp1') public ssss: Input;
   title ='current'
   currjson:any = [];
   base =  'USD';
   count2 = 'USD';
   result: string = '1'
   resultUSD: string = '--'
   resultEUR:string='--'
   
   ngOnInit(): void {
    this.currencyHeader.getData().subscribe(data=>{
      this.currjson = JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson)
      this.currjson.forEach((element: any) => {
        if(element.txt=='Долар США'){
          this.resultUSD=element.rate
        }
        if(element.txt=='Євро'){
          this.resultEUR=element.rate
        }
      });
      });
  }
  


   changebase(a:string){
    this.base = a;
    this.currency.getcurrencydata(this.base).subscribe(data=>{
      this.currjson =JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson)
      console.log(this.currjson)
      if(this.count2=='USD'){
        this.result =this.currjson.rates.USD
      }
      if(this.count2=='UAH'){
        this.result =this.currjson.rates.UAH
      }
      if(this.count2=='EUR'){
        this.result =this.currjson.rates.EUR
      }
    })
    this.changeTest()
  }

  changeTest(){
    var inp1 = (<HTMLInputElement>document.getElementById("inp1"))
    var inp2 = (<HTMLInputElement>document.getElementById("inp2"))
    this.currency.getcurrencydata(this.base).subscribe(data=>{
      this.currjson =JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson)
      console.log(this.currjson)
      if(this.count2=='USD'){
        inp2.value = (+inp1.value * this.currjson.rates.USD).toString()
      }
      if(this.count2=='UAH'){
        inp2.value = (+inp1.value * this.currjson.rates.UAH).toString()
      }
      if(this.count2=='EUR'){
        inp2.value = (+inp1.value * this.currjson.rates.EUR).toString()
      }
    })
  }
  changeTest2(){
    var inp1 = (<HTMLInputElement>document.getElementById("inp1"))
    var inp2 = (<HTMLInputElement>document.getElementById("inp2"))
    this.currency.getcurrencydata(this.count2).subscribe(data=>{
      this.currjson =JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson)
      console.log(this.currjson)
      if(this.base=='USD'){
        inp1.value = (+inp2.value * this.currjson.rates.USD).toString()
      }
      if(this.base=='UAH'){
        inp1.value = (+inp2.value * this.currjson.rates.UAH).toString()
      }
      if(this.base=='EUR'){
        inp1.value = (+inp2.value * this.currjson.rates.EUR).toString()
      }
    })
  }

  tocountry(b:string){
    
    this.count2=b;
    this.currency.getcurrencydata(this.base).subscribe(data=>{
      this.currjson =JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson)
      console.log(this.currjson)
      if(this.count2=='USD'){
        this.result =this.currjson.rates.USD
      }
      if(this.count2=='UAH'){
        this.result =this.currjson.rates.UAH
      }
      if(this.count2=='EUR'){
        this.result =this.currjson.rates.EUR
      }
    })
    this.changeTest2()
  }
 

  constructor(private currency:CurrencyapidataService, 
    private currencyHeader:CurrtncyapiService){this.ssss = {}
  }
  convert(){
    this.currency.getcurrencydata(this.base).subscribe(data=>{
      this.currjson =JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson)
      console.log(this.currjson)
      if(this.count2=='USD'){
        this.result =this.currjson.rates.USD
      }
      if(this.count2=='UAH'){
        this.result =this.currjson.rates.UAH
      }
      if(this.count2=='EUR'){
        this.result =this.currjson.rates.EUR
      }
    })
  }
  
  
}


