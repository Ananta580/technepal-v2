import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HotTopicComponent } from './shared/components/hot-topic/hot-topic.component';
import { LatestNewsComponent } from './shared/components/latest-news/latest-news.component';

@NgModule({
  declarations: [MainComponent, HotTopicComponent, LatestNewsComponent],
  imports: [CommonModule, MainRoutingModule],
  bootstrap: [MainComponent],
})
export class MainModule {}
