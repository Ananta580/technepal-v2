import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewslistComponent } from './news-list.component';
import { NewsListRoutingModule } from './news-list-routing.module';

@NgModule({
  declarations: [NewslistComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NewsListRoutingModule,
  ],
})
export class NewsListModule {}
