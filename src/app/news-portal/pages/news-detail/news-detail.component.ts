import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BlogBE,
  BlogCardBE,
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

  recommendedBlogs: BlogCardBE[] = [
    {
      title: 'Rumor suggests Apple MacBook Pro OLED due in 2026',
      combinedTitle: 'some-random-title',
      subTitle:
        'Fresh speculation adds to weight of existing rumors. Apple’s MacBook Pro with OLED will turn up in 2026, to be followed by a MacBook Air, we’re told.',
      coverImage:
        'https://technepal.azurewebsites.net/blog/f5759b6f-e3a6-4e39-86e6-5722bd7ec89d.webp',
      authorId: '1bbd01ef-a71d-458f-8723-0e30f0d3326b',
      publishedDate: new Date().toString(),
      viewCount: 10,
    },
    {
      title: 'Rumor suggests Apple MacBook Pro OLED due in 2026',
      combinedTitle: 'some-random-title',
      subTitle:
        'Fresh speculation adds to weight of existing rumors. Apple’s MacBook Pro with OLED will turn up in 2026, to be followed by a MacBook Air, we’re told.',
      coverImage:
        'https://technepal.azurewebsites.net/blog/f5759b6f-e3a6-4e39-86e6-5722bd7ec89d.webp',
      authorId: '1bbd01ef-a71d-458f-8723-0e30f0d3326b',
      publishedDate: new Date().toString(),
      viewCount: 10,
    },
    {
      title: 'Rumor suggests Apple MacBook Pro OLED due in 2026',
      combinedTitle: 'some-random-title',
      subTitle:
        'Fresh speculation adds to weight of existing rumors. Apple’s MacBook Pro with OLED will turn up in 2026, to be followed by a MacBook Air, we’re told.',
      coverImage:
        'https://technepal.azurewebsites.net/blog/f5759b6f-e3a6-4e39-86e6-5722bd7ec89d.webp',
      authorId: '1bbd01ef-a71d-458f-8723-0e30f0d3326b',
      publishedDate: new Date().toString(),
      viewCount: 10,
    },
    {
      title: 'Rumor suggests Apple MacBook Pro OLED due in 2026',
      combinedTitle: 'some-random-title',
      subTitle:
        'Fresh speculation adds to weight of existing rumors. Apple’s MacBook Pro with OLED will turn up in 2026, to be followed by a MacBook Air, we’re told.',
      coverImage:
        'https://technepal.azurewebsites.net/blog/f5759b6f-e3a6-4e39-86e6-5722bd7ec89d.webp',
      authorId: '1bbd01ef-a71d-458f-8723-0e30f0d3326b',
      publishedDate: new Date().toString(),
      viewCount: 10,
    },
  ];

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
    this.isLoading = true;
    this.blogService
      .getBlogByCombinedTitle(this.combinedTitle, true)
      .subscribe({
        next: (res: ApiResonse<BlogBE>) => {
          this.isLoading = false;
          this.blog = res.data;
          this.author = this.authors.find((x) => x.id == this.blog?.authorId);
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
