import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  styles: [
    `
      .top-category {
        overflow-x: scroll;
        overflow-y: hidden;
      }

      .top-category::-webkit-scrollbar {
        display: none;
      }

      .top-category {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `,
  ],
  templateUrl: './main.component.html',
})
export class MainComponent {}
