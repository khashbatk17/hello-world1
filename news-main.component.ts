import { Component, OnInit } from '@angular/core';
import { News } from '../news-class';

@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.scss']
})
export class NewsMainComponent implements OnInit {
  newsList: News[] = [];
  newsList1: News[] = [];

  constructor() { }

  ngOnInit(): void {
    const news = new News();
    news.newsId = 1;
    news.imageUrl = "https://info.gobi.mn/static/a5993ad7d3a4d9bc3d5077ad90cfbdd1/3564b/1_1639547834_d80589e7a8.jpg";
    news.subject = "Говь бонд нь хоёрдогч зах зээл дээр сард дунджаар ₮3.4 тэрбумаар арилжигдаж байна dfhdgf";
    news.snippet =`Ronin hackers have transferred the stolen assets from Ethereum to the Bitcoin network, according 
    to new findings by blockchain investigator and developer ₿liteZero.Recall that after the Ronin bridge hack in March,
     the attackers moved the $625 million worth of USDC and ETH to Ethereum-based crypto mixer Tornado Cash, making it 
     difficult for authorities to trace the movement of the fu`
    news.createdDatetime = "2022-06-06T09:47:12.549";
    news.isActive = true;

    const news1 = new News();
    news1.newsId = 2;
    news1.imageUrl = "https://info.gobi.mn/static/a5993ad7d3a4d9bc3d5077ad90cfbdd1/3564b/1_1639547834_d80589e7a8.jpg";
    news1.subject = "Говь бонд нь хоёрдогч зах зээл дээр сард дунджаар ₮3.4 тэрбумаар арилжигдаж байна dfhsd";
    news1.snippet = `The global cryptocurrency market cap now stands at $1.03T, up by 2.88% over the last day, according 
    to CoinMarketCap data.Bitcoin (BTC) has been trading between $20,762 and $21,590 over the past 24 hours. As of 08:00 
    PM (UTC) today, BTC is trading at $21,520, up by 2.51%.Most major cryptocurrencies by market cap are trading higher.
     Market outperformers include SSV, SANTOS, and LDO, up`
    news1.createdDatetime = "2022-06-06T09:47:12.549";
    news1.isActive = true;

    const news2 = new News();
    news2.newsId = 3;
    news2.imageUrl = "https://info.gobi.mn/static/a5993ad7d3a4d9bc3d5077ad90cfbdd1/3564b/1_1639547834_d80589e7a8.jpg";
    news2.subject = "Говь бонд нь хоёрдогч зах зээл дээр сард дунджаар ₮3.4 тэрбумаар арилжигдаж байна asgasga";
    news2.snippet = `A large number of Bored Apes Yacht Club NFTs are approaching liquidation on the lending platform 
    BendDAO, can this cascade into a crash of the entire non-fungible token market?Bored Apes NFTs At Risk Of Liquidation
     As Floor Prices Drop More Than 50% Since All-Time HighBendDAO is a platform that lends out Ethereum loans to users 
     against NFT collaterals. Generally, users can avail up`
    news2.createdDatetime = "2022-06-06T09:47:12.549";
    news2.isActive = false;
      
    this.newsList.push(news);
    this.newsList.push(news1);
    this.newsList.push(news2);

    // this.newsList.map(el => this.newsList1.push(el));
  }
}
