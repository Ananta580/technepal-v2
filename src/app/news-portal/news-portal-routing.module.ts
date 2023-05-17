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
      {
        // This name is unique and is a combined name not a normal name, used to fetch detail from Api
        path: ':name',
        loadChildren: () =>
          import('./pages/news-detail/news-detail.module').then(
            (m) => m.NewsDetailModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPortalRoutingModule {}
