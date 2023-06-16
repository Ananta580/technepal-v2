import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { BlogBE } from '../model/blog';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private api: ApiService) {}

  getAllBlogs() {
    return this.api.get('/blog');
  }
  getBlogByCombinedTitle(title: string, viewed: boolean = false) {
    const params = new HttpParams().set('title', title).set('viewed', viewed);
    return this.api.get('/blog/title', params);
  }
  getBlogById(id: string) {
    const params = new HttpParams().set('id', id);
    return this.api.get('/blog/id', params);
  }
  createBlog(blog: BlogBE, file: File) {
    const formData = new FormData();
    formData.append('CoverImage', file);
    formData.append('Blog', JSON.stringify(blog));
    return this.api.postFile(`/blog`, formData);
  }
  editBlog(blog: BlogBE, file: File) {
    const formData = new FormData();
    formData.append('CoverImage', file);
    formData.append('Blog', JSON.stringify(blog));
    return this.api.putFile(`/blog`, formData);
  }
  deleteBlog(id: string) {
    return this.api.delete(`/blog?id=${id}`);
  }
}
