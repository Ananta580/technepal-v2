import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HotTopicComponent } from './shared/components/hot-topic/hot-topic.component';
import { LatestNewsComponent } from './shared/components/latest-news/latest-news.component';
import { FlatDisplaySectionComponent } from './shared/components/flat-display-section/flat-display-section.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    HotTopicComponent,
    LatestNewsComponent,
    FlatDisplaySectionComponent,
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule],
  bootstrap: [MainComponent],
})
export class MainModule {}
