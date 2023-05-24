import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { CategoryBE } from '../model/category';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private api: ApiService) {}

  getAllCategorys() {
    return this.api.get('/category');
  }
  getCategoryById(id: string) {
    const params = new HttpParams().set('id', id);
    return this.api.get('/category/id', params);
  }
  createCategory(category: CategoryBE) {
    console.log(category);
    return this.api.post(`/category`, category);
  }
  editCategory(category: CategoryBE) {
    return this.api.put(`/category`, category);
  }
  deleteCategory(id: string) {
    return this.api.delete(`/category?id=${id}`);
  }
}
