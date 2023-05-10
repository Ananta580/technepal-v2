import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPortalRoutingModule } from './news-portal-routing.module';
import { MainComponent } from './pages/main/main.component';
import { NewsPortalComponent } from './news-portal.component';

@NgModule({
  declarations: [MainComponent, NewsPortalComponent],
  imports: [CommonModule, NewsPortalRoutingModule],
})
export class NewsPortalModule {}
