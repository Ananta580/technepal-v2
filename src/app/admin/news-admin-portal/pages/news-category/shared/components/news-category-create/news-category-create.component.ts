import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryBE } from 'src/app/admin/news-admin-portal/shared/model/category';
import { CategoryService } from 'src/app/admin/news-admin-portal/shared/services/category.service';
import { ApiResonse } from 'src/app/shared/model/api.response';

@Component({
  selector: 'app-news-category-create',
  templateUrl: './news-category-create.component.html',
})
export class NewsCategoryCreateComponent implements OnChanges {
  @Output() onCancelClicked = new EventEmitter<boolean>();
  @Output() onSaved = new EventEmitter<boolean>();

  @Input() category: CategoryBE | null = null;

  categoryForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.categoryForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      code: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category']) {
      if (this.category) {
        this.categoryForm.patchValue(this.category);
      }
    }
  }

  saveCategory() {
    const { value } = this.categoryForm;
    if (!value.id) {
      delete value.id;
    }
    if (this.category) {
      this.categoryService.editCategory(value).subscribe({
        next: (res: ApiResonse<CategoryBE>) => {
          this.onSaved.emit();
          this.cancel();
        },
      });
    } else {
      this.categoryService.createCategory(value).subscribe({
        next: (res: ApiResonse<CategoryBE>) => {
          this.onSaved.emit();
          this.cancel();
        },
      });
    }
  }

  cancel() {
    this.category = null;
    this.onCancelClicked.emit();
  }
}
