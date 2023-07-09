import { Component, OnInit } from '@angular/core';
import { BlogBE } from 'src/app/news-admin-portal/shared/model/blog';
import { ApiResonse } from 'src/app/shared/model/api.response';
import { BlogService } from '../main/shared/services/blog.service';

@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
})
export class PopularListComponent implements OnInit {
  blogs?: BlogBE[] = [];

  isLoading = false;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadBlog();
  }

  loadBlog() {
    this.blogService.getHotNews().subscribe({
      next: (res: ApiResonse<BlogBE[]>) => {
        this.blogs = res.data;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}
