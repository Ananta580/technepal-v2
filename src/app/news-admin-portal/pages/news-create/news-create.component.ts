import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
})
export class NewsCreateComponent {
  blogId: string = '';
  edit = false;
  constructor(private _route: ActivatedRoute) {
    this.blogId = this._route.snapshot.paramMap.get('id') ?? '';
    this.edit = this.blogId !== '';
  }
}
