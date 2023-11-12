import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    TopBarComponent,
    FooterBarComponent,
    HeroCardComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, RouterModule],
})
export class HomeModule {}
