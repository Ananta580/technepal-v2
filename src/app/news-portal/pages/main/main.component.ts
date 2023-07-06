import { Component, OnInit } from '@angular/core';
import { BlogService } from './shared/services/blog.service';
import { CategoryService } from './shared/services/category.service';
import { ApiResonse } from 'src/app/shared/model/api.response';
import { CategoryBE } from './shared/models/category';
import { HotTopicService } from 'src/app/news-admin-portal/shared/services/hot-topic.service';
import { HotTopicBE } from 'src/app/news-admin-portal/shared/model/hot-topic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  styles: [
    `
      /* width */
      .scrollbar::-webkit-scrollbar {
        width: 10px;
        height: 5px;
      }

      /* Track */
      .scrollbar::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      .scrollbar::-webkit-scrollbar-thumb {
        background: #7d8ca3;
      }

      /* Handle on hover */
      .scrollbar::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `,
  ],
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  categoryList: CategoryBE[] = [];
  hotTopicList: HotTopicBE[] = [];
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private hotTopicService: HotTopicService
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.loadHotTopics();
  }

  getAllCategories() {
    this.categoryService.getAllCategorys().subscribe({
      next: (res: ApiResonse<CategoryBE[]>) => {
        this.categoryList = res.data;
      },
    });
  }

  loadHotTopics() {
    this.hotTopicService.getAllHotTopics().subscribe({
      next: (res: ApiResonse<HotTopicBE[]>) => {
        this.hotTopicList = res.data;
      },
    });
  }

  redirectToHotTopicList(id: string) {
    this.router.navigateByUrl(`news/hot/${id}`);
  }
}
