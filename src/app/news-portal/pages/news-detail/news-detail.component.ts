import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../main/shared/models/news.model';
import { HotNews } from '../main/shared/mockup';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
})
export class NewsDetailComponent {
  blog?: News;
  combinedTitle = '';

  constructor(private _route: ActivatedRoute) {
    this.combinedTitle = _route.snapshot.paramMap.get('name') ?? '';
    console.log(this.combinedTitle);
    this.blog = HotNews.find((x) => x.combinedTitle == this.combinedTitle)!;
    console.log(this.blog);
  }
}
