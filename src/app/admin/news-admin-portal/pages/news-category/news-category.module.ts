import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCategoryRoutingModule } from './news-category-routing.module';
import { NewsCategoryComponent } from './news-category.component';
import { NewsCategoryListComponent } from './shared/components/news-category-list/news-category-list.component';
import { NewsCategoryCreateComponent } from './shared/components/news-category-create/news-category-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsCategoryComponent,
    NewsCategoryListComponent,
    NewsCategoryCreateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NewsCategoryRoutingModule,
  ],
})
export class NewsCategoryModule {}
