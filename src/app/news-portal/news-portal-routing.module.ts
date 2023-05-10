import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPortalComponent } from './news-portal.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: NewsPortalComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPortalRoutingModule {}
