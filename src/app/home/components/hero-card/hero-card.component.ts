import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent {
  @Input() bgColor: string = '';
  @Input() color: string = '';
  @Input() button: string = '';
  @Input() icon: string = '';
  @Input() description: string = '';
  @Input() tags: string[] = [];
  @Input() url: string = '';
}
