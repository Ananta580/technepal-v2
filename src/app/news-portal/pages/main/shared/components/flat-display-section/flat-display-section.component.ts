import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flat-display-section',
  templateUrl: './flat-display-section.component.html',
})
export class FlatDisplaySectionComponent {
  @Input() sectionName = '';
}
