import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../shared/services/blog.service';
import { ApiResonse } from 'src/app/shared/model/api.response';
import { BlogBE } from '../../shared/model/blog';

@Component({
  selector: 'app-news-lists',
  templateUrl: './news-lists.component.html',
})
export class NewsListsComponent implements OnInit {
  blogs: BlogBE[] = [];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs() {
    this.blogService.getAllBlogs().subscribe({
      next: (res: ApiResonse<BlogBE[]>) => {
        this.blogs = res.data;
      },
      error: () => {},
    });
  }
}
