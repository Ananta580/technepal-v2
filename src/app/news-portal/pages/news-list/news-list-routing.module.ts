import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewslistComponent } from './news-list.component';

const routes: Routes = [
  {
    path: '',
    component: NewslistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsListRoutingModule {}
