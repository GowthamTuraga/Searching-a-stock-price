import { STOCK } from './stock/stock-data';
import { Stock } from './stock/stock';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StockserviceService {
  private StockData : Stock[] = STOCK ;

  constructor() { }

  getStock(symbol : String): Stock {
    for(var i=0; i<this.StockData.length; i++)
    {
      if(this.StockData[i].symbol == symbol)
      return this.StockData[i];
    }
  }
}
