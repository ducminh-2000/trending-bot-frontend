import { CoinserviceService } from './../coincomponent/coinservice.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Coin } from '../../model/coin';
import * as $ from "jquery";
import { Trade } from '../../model/Trade';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})

export class TrendingComponent implements OnInit {

  binanceSocket = new WebSocket("wss://stream.binance.com:9443/ws/");
  listDown: Trade[] = []
  listUp: Trade[] = []

  constructor(private service: CoinserviceService) { }

  listCoin: Coin[] = [];
  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.getAll().subscribe((data) => {
      this.listCoin = data;
      var trade: Trade = new Trade();
      this.listCoin.forEach((coin) => {
        this.binanceSocket.onmessage = function (event) {
          var data = JSON.parse(event.data);
          var date = new Date(data.E);
          var day = date.getUTCDate();
          var month = date.getMonth();
          var year = date.getFullYear();
          var minute = "0" + date.getMinutes();
          var hour = date.getHours();
          var second = "0" + date.getSeconds();
          var s_date = date.getDate() +
            "/" + (date.getMonth() + 1) +
            "/" + date.getFullYear() +
            " " + date.getHours() +
            ":" + date.getMinutes() +
            ":" + date.getSeconds();
          trade.date = s_date;
          trade.symbol = data.s;
          trade.currentPrice = data.c;
          trade.changePercent = parseFloat(data.P);
          console.log(trade)
          if (trade.changePercent > 0.5) {
            listUp.push(trade);
          }
          // else if (trade.changePercent < 0.5) TrendingComponent.listUp.pop();
          if (trade.changePercent <= -10) {
            listDown.push(trade);
          }
          // else if (trade.changePercent > -10) TrendingComponent.listDown.pop();
          // listUp.forEach((key) => {
          //   var item = `#${key.symbol.toLowerCase()}-up`;
          //   if (key.changePercent > 0.5) {
          //     $(item).empty();
          //     $(item).append(`<td>${key.date}</td><td>${key.symbol}</td><td>${key.currentPrice}</td><td style="text-align:center"><span class="btn btn-success">${key.changePercent}<span></td>`)
          //   }

          // })
          // listDown.forEach((key) => {
          //   var item = `#${key.symbol.toLowerCase()}-down`;
          //   if (key.changePercent < -10) {
          //     $(item).empty();
          //     $(item).append(`<td>${key.date}</td><td>${key.symbol}</td><td>${key.currentPrice}</td><td><p class="btn btn-danger">${key.changePercent}</p></td>`)
          //   }
          // })
        }
      })
    })
  }
}

