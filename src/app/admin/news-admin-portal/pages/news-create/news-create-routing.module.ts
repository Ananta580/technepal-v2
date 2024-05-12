import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCreateComponent } from './news-create.component';

const routes: Routes = [{ path: '', component: NewsCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsCreateRoutingModule {}
