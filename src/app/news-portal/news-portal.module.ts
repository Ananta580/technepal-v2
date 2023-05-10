import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPortalRoutingModule } from './news-portal-routing.module';
import { MainComponent } from './pages/main/main.component';
import { NewsPortalComponent } from './news-portal.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [MainComponent, NewsPortalComponent, NavBarComponent],
  imports: [CommonModule, NewsPortalRoutingModule],
})
export class NewsPortalModule {}
