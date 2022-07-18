import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectorMatcher } from '@angular/compiler';

export type RateType = {
  r030: number,
  txt:string,
  rate: number,
  cc: string
  exchangedate:string
}


@Injectable({
  providedIn: 'root'
})
export class CurrtncyapiService {
  getToday(){
    const data = new Date();
    return `${data.getFullYear()}0${data.getMonth()+1}${data.getDate()}`
  }
  constructor(private http:HttpClient) { }
  getData(){
    let URL =`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${this.getToday()}&json`
    return this.http.get(URL);
  }
}

//"https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20200302&json"
    
