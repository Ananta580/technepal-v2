import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-news-category-create',
  templateUrl: './news-category-create.component.html',
})
export class NewsCategoryCreateComponent {
  @Output() onCancelClicked = new EventEmitter<boolean>();
}
