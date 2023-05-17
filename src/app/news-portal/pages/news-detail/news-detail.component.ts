import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
})
export class NewsDetailComponent {
  constructor(private _route: ActivatedRoute) {
    console.log(_route.snapshot.params);
  }
}
