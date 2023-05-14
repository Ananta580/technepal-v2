import { Component } from '@angular/core';
import { LatestNews } from '../../mockup';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
})
export class LatestNewsComponent {
  latestNews = LatestNews;
}
