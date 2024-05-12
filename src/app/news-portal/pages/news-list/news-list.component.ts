import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogBE } from 'src/app/admin/news-admin-portal/shared/model/blog';
import { ApiResonse } from 'src/app/shared/model/api.response';
import { BlogService } from '../main/shared/services/blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
})
export class NewslistComponent implements OnInit, OnDestroy {
  blogs?: BlogBE[] = [];

  hotTopicId = '';
  categoryId = '';
  searchString = '';

  isLoading = false;

  paramSubscription!: Subscription;
  querySubscription!: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {
    this.paramSubscription = this._route.params.subscribe((params: Params) => {
      this.hotTopicId = params['hotTopicId'];
      this.categoryId = params['categoryId'];
      if (this.hotTopicId || this.categoryId) {
        this.loadBlog();
      }
    });

    this.querySubscription = this._route.queryParams.subscribe(
      (params: Params) => {
        this.searchString = params['searchString'];
        if (this.searchString) {
          this.loadBlog();
        }
      }
    );
  }

  ngOnInit(): void {}

  loadBlog() {
    this.isLoading = true;
    if (this.hotTopicId) {
      this.blogService.getBlogByHotTopicId(this.hotTopicId).subscribe({
        next: (res: ApiResonse<BlogBE[]>) => {
          this.isLoading = false;
          this.blogs = res.data;
        },
        error: () => {
          this.isLoading = false;
        },
      });
    }
    if (this.categoryId) {
      this.blogService.getBlogByCategoryId(this.categoryId).subscribe({
        next: (res: ApiResonse<BlogBE[]>) => {
          this.isLoading = false;
          this.blogs = res.data;
        },
        error: () => {
          this.isLoading = false;
        },
      });
    }
    if (this.searchString) {
      this.blogService.searchBlogs(this.searchString).subscribe({
        next: (res: ApiResonse<BlogBE[]>) => {
          this.isLoading = false;
          this.blogs = res.data;
        },
        error: () => {
          this.isLoading = false;
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }
}
