import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsListsRoutingModule } from './news-lists-routing.module';
import { NewsListsComponent } from './news-lists.component';

@NgModule({
  declarations: [NewsListsComponent],
  imports: [CommonModule, NewsListsRoutingModule],
})
export class NewsListsModule {}
