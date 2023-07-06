import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogBE } from 'src/app/news-admin-portal/shared/model/blog';
import { ApiResonse } from 'src/app/shared/model/api.response';
import { AUTHORS, Author } from 'src/app/shared/model/author.constant';
import { BlogService } from '../main/shared/services/blog.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
})
export class NewslistComponent implements OnInit {
  blogs?: BlogBE[] = [];

  hotTopicId = '';
  categoryId = '';
  searchString = '';

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.hotTopicId = _route.snapshot.paramMap.get('hotTopicId') ?? '';
    this.categoryId = _route.snapshot.paramMap.get('categoryId') ?? '';
    this.searchString = _route.snapshot.queryParamMap.get('searchString') ?? '';
  }

  ngOnInit(): void {
    this.loadBlog();
  }

  loadBlog() {
    if (this.hotTopicId) {
      this.blogService.getBlogByHotTopicId(this.hotTopicId).subscribe({
        next: (res: ApiResonse<BlogBE[]>) => {
          this.blogs = res.data;
        },
      });
    }
    console.log(this.categoryId);
    if (this.categoryId) {
      this.blogService.getBlogByCategoryId(this.categoryId).subscribe({
        next: (res: ApiResonse<BlogBE[]>) => {
          console.log(res);
          this.blogs = res.data;
        },
      });
    }

    if (this.searchString) {
      this.blogService.searchBlogs(this.searchString).subscribe({
        next: (res: ApiResonse<BlogBE[]>) => {
          this.blogs = res.data;
        },
      });
    }
  }
}
