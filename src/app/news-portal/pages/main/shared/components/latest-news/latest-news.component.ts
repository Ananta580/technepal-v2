import { Component } from '@angular/core';
import { LatestNews } from '../../mockup';
import { BlogService } from '../../services/blog.service';
import { ApiResonse } from 'src/app/shared/model/api.response';
import { BlogCardBE } from '../../models/blog';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
})
export class LatestNewsComponent {
  latestNews: BlogCardBE[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getHotNews();
  }

  getHotNews() {
    this.blogService.getHotNews().subscribe({
      next: (res: ApiResonse<BlogCardBE[]>) => {
        this.latestNews = res.data;
      },
    });
  }
}
