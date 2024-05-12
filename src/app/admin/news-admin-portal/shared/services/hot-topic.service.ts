import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { HttpParams } from '@angular/common/http';
import { HotTopicBE } from '../model/hot-topic';

@Injectable({
  providedIn: 'root',
})
export class HotTopicService {
  constructor(private api: ApiService) {}

  getAllHotTopics() {
    return this.api.get('/hot-topic');
  }
  getHotTopicById(id: string) {
    const params = new HttpParams().set('id', id);
    return this.api.get('/hot-topic/id', params);
  }
  createHotTopic(hotTopic: HotTopicBE) {
    return this.api.post(`/hot-topic`, hotTopic);
  }
  editHotTopic(hotTopic: HotTopicBE) {
    return this.api.put(`/hot-topic`, hotTopic);
  }
  deleteHotTopic(id: string) {
    return this.api.delete(`/hot-topic?id=${id}`);
  }
}
