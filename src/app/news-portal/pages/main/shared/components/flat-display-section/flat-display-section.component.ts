import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../models/news.model';
import { GamingNews, LaptopNews, PhoneNews } from '../../mockup';
import { BlogService } from '../../services/blog.service';
import { ApiResonse } from 'src/app/shared/model/api.response';

@Component({
  selector: 'app-flat-display-section',
  templateUrl: './flat-display-section.component.html',
})
export class FlatDisplaySectionComponent implements OnInit {
  @Input() sectionName = '';
  @Input() sectionCode = '';

  sectionNews: News[] = [];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogsByCategory();
  }

  getBlogsByCategory() {
    this.blogService.getBlogByCategoryId(this.sectionCode).subscribe({
      next: (res: ApiResonse<News[]>) => {
        this.sectionNews = res.data;
      },
    });
  }
}
