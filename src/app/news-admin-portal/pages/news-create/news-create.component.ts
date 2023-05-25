import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../shared/services/category.service';
import { ApiResonse } from 'src/app/shared/model/api.response';
import { CategoryBE } from '../../shared/model/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogBE } from '../../shared/model/blog';
import { BlogService } from '../../shared/services/blog.service';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
})
export class NewsCreateComponent implements OnInit {
  blogId: string = '';
  categoryId: string = '';
  edit = false;

  categories: { key: CategoryBE; value: string }[] = [];
  selectedCategory: { key: CategoryBE; value: string } | null = null;

  blogForm!: FormGroup;
  constructor(
    private _route: ActivatedRoute,
    private fb: FormBuilder,
    private blogService: BlogService,
    private categoryService: CategoryService
  ) {
    this.blogId = this._route.snapshot.paramMap.get('id') ?? '';
    this.edit = this.blogId !== '';
    if (this.edit) {
      this.patchForm();
    }
  }

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      id: [],
      title: ['', Validators.required],
      subTitle: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.loadCategory();
  }

  get title() {
    return this.blogForm.get('title');
  }

  patchForm() {
    this.blogService.getBlogById(this.blogId).subscribe({
      next: (res) => {
        this.blogForm.patchValue(res.data);
        this.categoryId = res.data.categoryId;
      },
    });
  }

  loadCategory() {
    this.categoryService.getAllCategorys().subscribe({
      next: (res: ApiResonse<CategoryBE[]>) => {
        this.categories = res.data.map((x) => {
          return { key: x, value: x.code };
        });
        if (this.categoryId) {
          this.selectedCategory = this.categories.find(
            (x) => x.key.id === this.categoryId
          )!;
        }
      },
    });
  }

  categoryChanged(select: { key: CategoryBE; value: string } | null) {
    this.selectedCategory = select;
  }

  saveBlog() {
    const payload = this.createPayload();
    if (!payload.id) {
      delete payload.id;
      this.blogService.createBlog(payload).subscribe({
        next: (res) => {},
      });
    } else {
      this.blogService.editBlog(payload).subscribe({
        next: (res) => {},
      });
    }
  }

  createPayload(): BlogBE {
    return {
      ...this.blogForm.value,
      categoryId: this.selectedCategory?.key.id ?? null,
      combinedTitle: this.title?.value.toLowerCase().replaceAll(' ', '-'),
      publishedDate: new Date(),
      coverImage: '',
    };
  }
}
