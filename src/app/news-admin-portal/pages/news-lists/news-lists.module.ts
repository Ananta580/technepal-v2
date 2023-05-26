import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsListsRoutingModule } from './news-lists-routing.module';
import { NewsListsComponent } from './news-lists.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NewsListsComponent],
  imports: [CommonModule, SharedModule, NewsListsRoutingModule],
})
export class NewsListsModule {}
