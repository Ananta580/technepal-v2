import { Component, OnInit } from '@angular/core';
import { BlogService } from './shared/services/blog.service';
import { CategoryService } from './shared/services/category.service';
import { ApiResonse } from 'src/app/shared/model/api.response';
import { CategoryBE } from './shared/models/category';

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
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategorys().subscribe({
      next: (res: ApiResonse<CategoryBE[]>) => {
        this.categoryList = res.data;
      },
    });
  }
}
