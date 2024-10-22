import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BlogBE,
  BlogCardBE,
  BlogViewBE,
} from 'src/app/admin/news-admin-portal/shared/model/blog';
import { BlogService } from 'src/app/admin/news-admin-portal/shared/services/blog.service';
import { ApiResonse } from 'src/app/shared/model/api.response';
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

  isLoading = false;

  recommendedBlogs: BlogCardBE[] = [];

  constructor(
    private _route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((data: any) => {
      this.combinedTitle = data.params.name;
      if (this.combinedTitle) {
        this.loadBlog();
      }
    });
  }

  loadBlog() {
    this.isLoading = true;
    this.blogService
      .getBlogByCombinedTitle(this.combinedTitle, true)
      .subscribe({
        next: (res: ApiResonse<BlogViewBE>) => {
          this.isLoading = false;
          this.blog = res.data.blog;
          this.author = this.authors.find((x) => x.id == this.blog?.authorId);
          this.recommendedBlogs = res.data.relatedBlogs;
        },
        error: () => {
          this.isLoading = false;
        },
      });
  }

  getAuthor(id: string) {
    return this.authors.find((x) => x.id === id);
  }
}
