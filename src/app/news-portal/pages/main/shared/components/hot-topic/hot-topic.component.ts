import { Component, OnInit } from '@angular/core';
import { ApiResonse } from 'src/app/shared/model/api.response';
import { BlogCardBE } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-hot-topic',
  templateUrl: './hot-topic.component.html',
})
export class HotTopicComponent implements OnInit {
  hotNews: BlogCardBE[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getHotNews();
  }

  getHotNews() {
    this.blogService.getHotNews().subscribe({
      next: (res: ApiResonse<BlogCardBE[]>) => {
        this.hotNews = res.data;
      },
    });
  }
}
