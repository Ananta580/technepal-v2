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
    path: 'news-admin',
    loadChildren: () =>
      import('./news-admin-portal/news-admin-portal.module').then(
        (m) => m.NewsAdminPortalModule
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
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
