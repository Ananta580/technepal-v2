import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private api: ApiService) {}

  getHotNews() {
    return this.api.get('/blog/hot');
  }

  getLatestNews() {
    return this.api.get('/blog/latest');
  }

  getBlogByCategoryId(categoryId: string) {
    return this.api.get(`/blog/category?Id=${categoryId}`);
  }

  getBlogByHotTopicId(hotTopicId: string) {
    return this.api.get(`/blog/hottopic?Id=${hotTopicId}`);
  }

  searchBlogs(searchString: string) {
    return this.api.get(`/blog/search?search=${searchString}`);
  }
}
