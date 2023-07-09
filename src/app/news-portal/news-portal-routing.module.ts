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
        path: 'hot/:hotTopicId',
        loadChildren: () =>
          import('./pages/news-list/news-list.module').then(
            (m) => m.NewsListModule
          ),
      },
      {
        path: 'category/:categoryId',
        loadChildren: () =>
          import('./pages/news-list/news-list.module').then(
            (m) => m.NewsListModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./pages/news-list/news-list.module').then(
            (m) => m.NewsListModule
          ),
      },
      {
        path: 'popular',
        loadChildren: () =>
          import('./pages/popular-list/popular-list.module').then(
            (m) => m.PopularListModule
          ),
      },
      {
        path: 'latest',
        loadChildren: () =>
          import('./pages/latest-list/latest-list.module').then(
            (m) => m.LatestListModule
          ),
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
