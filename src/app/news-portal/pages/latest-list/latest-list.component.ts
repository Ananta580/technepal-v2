import { Component, OnInit } from '@angular/core';
import { BlogBE } from 'src/app/news-admin-portal/shared/model/blog';
import { BlogService } from '../main/shared/services/blog.service';
import { ApiResonse } from 'src/app/shared/model/api.response';

@Component({
  selector: 'app-popular-list',
  templateUrl: './latest-list.component.html',
})
export class LatestListComponent implements OnInit {
  blogs?: BlogBE[] = [];

  isLoading = false;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadBlog();
  }

  loadBlog() {
    this.blogService.getLatestNews().subscribe({
      next: (res: ApiResonse<BlogBE[]>) => {
        this.blogs = res.data;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}