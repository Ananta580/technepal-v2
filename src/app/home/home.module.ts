import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, MainComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
