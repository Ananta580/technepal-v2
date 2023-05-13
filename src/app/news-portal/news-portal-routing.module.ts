import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPortalComponent } from './news-portal.component';

const routes: Routes = [
  {
    path: '',
    component: NewsPortalComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/main/main.module').then((m) => m.MainModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPortalRoutingModule {}
