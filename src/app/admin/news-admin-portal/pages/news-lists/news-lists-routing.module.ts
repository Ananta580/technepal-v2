import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListsComponent } from './news-lists.component';

const routes: Routes = [{ path: '', component: NewsListsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsListsRoutingModule {}
