import { StockserviceService } from './../stockservice.service';
import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { STOCK } from './stock-data';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
private stock: Stock[] = STOCK;
private currentStockValue : Stock;
  constructor(private stockservice : StockserviceService) { }

  ngOnInit() {
  }
  getStock(symbol : string):void {
    this.currentStockValue = this.stockservice.getStock(symbol);
  }

}
