import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsHotTopicRoutingModule } from './news-hot-topic-routing.module';
import { NewsHotTopicComponent } from './news-hot-topic.component';
import { NewsHotTopicCreateComponent } from './shared/components/news-hot-topic-create/news-hot-topic-create.component';
import { NewsHotTopicListComponent } from './shared/components/news-hot-topic-list/news-hot-topic-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NewsHotTopicComponent,
    NewsHotTopicCreateComponent,
    NewsHotTopicListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NewsHotTopicRoutingModule,
  ],
})
export class NewsHotTopicModule {}
