import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  // Input Events
  @Input() color:
    | 'primary'
    | 'secondary'
    | 'primary-light'
    | 'secondary-light'
    | 'white' = 'primary';
  @Input() paddings = 'p-2';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() border: 'none' | 'circle' | 'little' = 'none';
  @Input() outline = false;
  @Input() link = false;

  //Output Events

  constructor() {}
}
