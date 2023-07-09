import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestListComponent } from './latest-list.component';

const routes: Routes = [
  {
    path: '',
    component: LatestListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatestListRoutingModule {}
