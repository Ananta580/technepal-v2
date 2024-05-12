import { Component } from '@angular/core';
import { HotTopicBE } from 'src/app/admin/news-admin-portal/shared/model/hot-topic';
import { HotTopicService } from 'src/app/admin/news-admin-portal/shared/services/hot-topic.service';
import { ApiResonse } from 'src/app/shared/model/api.response';

@Component({
  selector: 'app-news-admin-hot-topic-list',
  templateUrl: './news-hot-topic-list.component.html',
})
export class NewsHotTopicListComponent {
  showAddEditBox = false;
  hotTopics: HotTopicBE[] = [];

  selectedHotTopic: HotTopicBE | null = null;

  constructor(private hotTopicService: HotTopicService) {}

  ngOnInit(): void {
    this.loadHotTopic();
  }

  loadHotTopic() {
    this.hotTopicService.getAllHotTopics().subscribe({
      next: (res: ApiResonse<HotTopicBE[]>) => {
        this.hotTopics = res.data;
      },
    });
  }

  editHotTopic(hotTopic: HotTopicBE) {
    this.showAddEditBox = true;
    this.selectedHotTopic = hotTopic;
  }

  deleteHotTopic(id: string) {
    this.hotTopicService.deleteHotTopic(id).subscribe({
      next: () => {
        this.loadHotTopic();
      },
    });
  }
}
