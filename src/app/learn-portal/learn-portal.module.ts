import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnPortalRoutingModule } from './learn-portal-routing.module';
import { MainComponent } from './pages/main/main.component';
import { LearnPortalComponent } from './learn-portal.component';

@NgModule({
  declarations: [LearnPortalComponent, MainComponent],
  imports: [CommonModule, LearnPortalRoutingModule],
})
export class LearnPortalModule {}
