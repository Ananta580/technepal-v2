import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCategoryRoutingModule } from './news-category-routing.module';
import { NewsCategoryComponent } from './news-category.component';
import { NewsCategoryListComponent } from './shared/components/news-category-list/news-category-list.component';
import { NewsCategoryCreateComponent } from './shared/components/news-category-create/news-category-create.component';


@NgModule({
  declarations: [
    NewsCategoryComponent,
    NewsCategoryListComponent,
    NewsCategoryCreateComponent
  ],
  imports: [
    CommonModule,
    NewsCategoryRoutingModule
  ]
})
export class NewsCategoryModule { }
