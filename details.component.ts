import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { profitTemplate } from '../profit-calc-class';
import { tickerCalcTemplate } from '../tickers-calc-class';
import {ApexNonAxisChartSeries, ApexChart, NgApexchartsModule, ApexAnnotations, ApexTitleSubtitle} from 'ng-apexcharts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  profitLoss = [14000, 22000, 384, -381];
  tickers: tickerCalcTemplate[] = [];

  chartSeries: ApexNonAxisChartSeries = [21, 79];
  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };
  chartLabels = ["Ард Санхүүгийн нэгтгэл", "Ард Кредит ББСБ ХК"];
  


  constructor() { }

  ngOnInit(): void {
    
    // const profit = new profitTemplate();
    // profit.marketValue = 140000;
    // profit.dayProfitLoss = -240000;
    // profit.totalInvestment = 1640000;
    // profit.unrealizedProfit = -22400;
    // this.profitLoss.push(profit);
    
    const ticker1 = new tickerCalcTemplate();
    ticker1.ticker = 'Ард Санхүүгийн нэгтгэл';
    ticker1.value = 65600;
    ticker1.profitLoss = -17100;
    this.tickers.push(ticker1);

    const ticker2 = new tickerCalcTemplate();
    ticker2.ticker = 'Ард Кредит ББСБ ХК'
    ticker2.value = 29600;
    ticker2.profitLoss = -59600;
    this.tickers.push(ticker2);

    // this.initializeChartOptions();

  }
  // private initializeChartOptions(): void {
  //   this.title = {
  //     text: 'Popular Languages'
  //   };

  //   this.series = {
  //     name: 
  //   }

  // }

}
