import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnPortalComponent } from './learn-portal.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: LearnPortalComponent,
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
export class LearnPortalRoutingModule {}
