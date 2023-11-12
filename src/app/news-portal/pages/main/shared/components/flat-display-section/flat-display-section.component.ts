import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../models/news.model';
import { GamingNews, LaptopNews, PhoneNews } from '../../mockup';
import { BlogService } from '../../services/blog.service';
import { ApiResonse } from 'src/app/shared/model/api.response';
import { BlogCardBE } from '../../models/blog';

@Component({
  selector: 'app-flat-display-section',
  templateUrl: './flat-display-section.component.html',
})
export class FlatDisplaySectionComponent implements OnInit {
  @Input() sectionName = '';
  @Input() sectionCode = '';

  sectionNews: BlogCardBE[] = [];

  isLoading = false;
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogsByCategory();
  }

  getBlogsByCategory() {
    this.isLoading = true;
    this.blogService.getBlogByCategoryId(this.sectionCode).subscribe({
      next: (res: ApiResonse<BlogCardBE[]>) => {
        this.isLoading = false;
        this.sectionNews = res.data;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}
