import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-preview',
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  @Input() value: string = '';
}
