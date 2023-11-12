import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGuardService } from './shared/Guard/AuthGuard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
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
    canActivate: [AuthGuardService],
  },
  {
    path: 'learn',
    loadChildren: () =>
      import('./learn-portal/learn-portal.module').then(
        (m) => m.LearnPortalModule
      ),
  },
  {
    path: 'terms-conditions',
    loadComponent: () =>
      import(
        './miscellaneous/terms-and-condition/terms-and-condition.component'
      ).then((m) => m.TermsAndConditionComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
