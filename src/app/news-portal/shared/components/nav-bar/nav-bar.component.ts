import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryBE } from 'src/app/news-admin-portal/shared/model/category';
import { CategoryService } from 'src/app/news-admin-portal/shared/services/category.service';
import { ApiResonse } from 'src/app/shared/model/api.response';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  selectedCategoryId = '';
  categoryList: CategoryBE[] = [];

  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.selectedCategoryId =
      _route.snapshot.children[0].paramMap.get('categoryId') ?? '';
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  // Edit later to show category only for Top bar
  getAllCategories() {
    this.categoryService.getAllCategorys().subscribe({
      next: (res: ApiResonse<CategoryBE[]>) => {
        this.categoryList = res.data;
      },
    });
  }

  redirectToCategoryList(id: string) {
    this.selectedCategoryId = id;
    this.router.navigateByUrl(`news/category/${id}`);
  }
}
