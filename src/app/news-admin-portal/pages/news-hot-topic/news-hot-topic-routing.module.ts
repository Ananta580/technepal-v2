import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsHotTopicComponent } from './news-hot-topic.component';

const routes: Routes = [
  {
    path: '',
    component: NewsHotTopicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsHotTopicRoutingModule {}
