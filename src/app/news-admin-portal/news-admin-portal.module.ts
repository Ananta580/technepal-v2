import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsAdminPortalRoutingModule } from './news-admin-portal-routing.module';
import { NewsAdminPortalComponent } from './news-admin-portal.component';

@NgModule({
  declarations: [NewsAdminPortalComponent],
  imports: [CommonModule, NewsAdminPortalRoutingModule],
})
export class NewsAdminPortalModule {}
