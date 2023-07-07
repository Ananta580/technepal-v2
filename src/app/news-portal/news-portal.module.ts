import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPortalRoutingModule } from './news-portal-routing.module';
import { NewsPortalComponent } from './news-portal.component';
import { FeedBarComponent } from './shared/components/feed-bar/feed-bar.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterBarComponent } from './shared/components/footer-bar/footer-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsPortalComponent,
    NavBarComponent,
    FeedBarComponent,
    FooterBarComponent,
  ],
  imports: [CommonModule, FormsModule, NewsPortalRoutingModule],
})
export class NewsPortalModule {}
