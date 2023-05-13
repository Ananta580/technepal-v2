import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  styles: [
    `
      /* width */
      .scrollbar::-webkit-scrollbar {
        width: 10px;
        height: 5px;
      }

      /* Track */
      .scrollbar::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      .scrollbar::-webkit-scrollbar-thumb {
        background: #7d8ca3;
      }

      /* Handle on hover */
      .scrollbar::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `,
  ],
  templateUrl: './main.component.html',
})
export class MainComponent {}
