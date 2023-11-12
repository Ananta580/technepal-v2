import { Component } from '@angular/core';
import { LatestNews } from '../../mockup';
import { BlogService } from '../../services/blog.service';
import { ApiResonse } from 'src/app/shared/model/api.response';
import { BlogCardBE } from '../../models/blog';
import { AUTHORS, Author } from 'src/app/shared/model/author.constant';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
})
export class LatestNewsComponent {
  latestNews: BlogCardBE[] = [];

  authors = AUTHORS;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getHotNews();
  }

  getHotNews() {
    this.blogService.getLatestNews().subscribe({
      next: (res: ApiResonse<BlogCardBE[]>) => {
        this.latestNews = res.data;
      },
    });
  }

  getAuthor(id: string) {
    return this.authors.find((x) => x.id === id);
  }
}
