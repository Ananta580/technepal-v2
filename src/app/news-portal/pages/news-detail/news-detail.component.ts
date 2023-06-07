import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../main/shared/models/news.model';
import { HotNews } from '../main/shared/mockup';
import { BlogService } from 'src/app/news-admin-portal/shared/services/blog.service';
import { ApiResonse } from 'src/app/shared/model/api.response';
import { BlogBE } from 'src/app/news-admin-portal/shared/model/blog';
import { AUTHORS, Author } from 'src/app/shared/model/author.constant';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
})
export class NewsDetailComponent implements OnInit {
  blog?: BlogBE;
  combinedTitle = '';

  authors = AUTHORS;
  author?: Author;

  constructor(
    private _route: ActivatedRoute,
    private blogService: BlogService
  ) {
    this.combinedTitle = _route.snapshot.paramMap.get('name') ?? '';
  }

  ngOnInit(): void {
    this.loadBlog();
  }

  loadBlog() {
    this.blogService
      .getBlogByCombinedTitle(this.combinedTitle, true)
      .subscribe({
        next: (res: ApiResonse<BlogBE>) => {
          this.blog = res.data;
          this.author = this.authors.find((x) => x.id == this.blog?.authorId);
        },
      });
  }
}
