import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-bar',
  templateUrl: './feed-bar.component.html',
})
export class FeedBarComponent {
  searchString = '';

  constructor(private router: Router) {}

  search() {
    this.router.navigateByUrl(`news/search?searchString=${this.searchString}`);
    this.searchString = '';
  }
}
