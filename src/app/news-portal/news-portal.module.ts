import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPortalRoutingModule } from './news-portal-routing.module';
import { NewsPortalComponent } from './news-portal.component';
import { FeedBarComponent } from './shared/components/feed-bar/feed-bar.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [NewsPortalComponent, NavBarComponent, FeedBarComponent],
  imports: [CommonModule, NewsPortalRoutingModule],
})
export class NewsPortalModule {}
