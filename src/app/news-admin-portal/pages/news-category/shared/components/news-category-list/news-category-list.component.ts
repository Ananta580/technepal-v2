import { Component, OnInit } from '@angular/core';
import { CategoryBE } from 'src/app/news-admin-portal/shared/model/category';
import { CategoryService } from 'src/app/news-admin-portal/shared/services/category.service';
import { ApiResonse } from 'src/app/shared/model/api.response';

@Component({
  selector: 'app-news-category-list',
  templateUrl: './news-category-list.component.html',
})
export class NewsCategoryListComponent implements OnInit {
  showAddEditBox = false;
  categories: CategoryBE[] = [];

  selectedCategory: CategoryBE | null = null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategory();
  }

  loadCategory() {
    this.categoryService.getAllCategorys().subscribe({
      next: (res: ApiResonse<CategoryBE[]>) => {
        this.categories = res.data;
      },
    });
  }

  editCategory(category: CategoryBE) {
    this.showAddEditBox = true;
    this.selectedCategory = category;
  }

  deleteCategory(id: string) {
    this.categoryService.deleteCategory(id).subscribe({
      next: () => {
        this.loadCategory();
      },
    });
  }
}
