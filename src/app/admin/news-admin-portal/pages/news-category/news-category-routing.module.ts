import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCategoryComponent } from './news-category.component';

const routes: Routes = [
  {
    path: '',
    component: NewsCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsCategoryRoutingModule {}
