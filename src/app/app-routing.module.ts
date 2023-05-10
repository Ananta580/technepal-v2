import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./news-portal/news-portal.module').then(
        (m) => m.NewsPortalModule
      ),
  },
  {
    path: 'learn',
    loadChildren: () =>
      import('./learn-portal/learn-portal.module').then(
        (m) => m.LearnPortalModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
