import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsAdminPortalComponent } from './news-admin-portal.component';

const routes: Routes = [
  {
    path: '',
    component: NewsAdminPortalComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/news-lists/news-lists.module').then(
            (m) => m.NewsListsModule
          ),
      },
      {
        path: 'create-edit',
        loadChildren: () =>
          import('./pages/news-create/news-create.module').then(
            (m) => m.NewsCreateModule
          ),
      },
      {
        path: 'create-edit/:id',
        loadChildren: () =>
          import('./pages/news-create/news-create.module').then(
            (m) => m.NewsCreateModule
          ),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./pages/news-category/news-category.module').then(
            (m) => m.NewsCategoryModule
          ),
      },
      {
        path: 'hot-topic',
        loadChildren: () =>
          import('./pages/news-hot-topic/news-hot-topic.module').then(
            (m) => m.NewsHotTopicModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsAdminPortalRoutingModule {}
