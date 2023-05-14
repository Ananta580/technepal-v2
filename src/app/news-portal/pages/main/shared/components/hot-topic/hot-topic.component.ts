import { Component } from '@angular/core';
import { HotNews } from '../../mockup';

@Component({
  selector: 'app-hot-topic',
  templateUrl: './hot-topic.component.html',
})
export class HotTopicComponent {
  hotNews = HotNews;
}
