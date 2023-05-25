import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent {
  isOpen = false;
  @Input() items: { key: any; value: string }[] = [
    { key: 1, value: 'One' },
    { key: 2, value: 'Two' },
    { key: 3, value: 'Three' },
  ];

  @Input() selected: { key: any; value: string } | null = null;

  @Input() placeholder = 'Choose an option';
  @Input() optional = true;

  @Output() onSelect = new EventEmitter<{ key: any; value: string } | null>();

  selectItem(item: any) {
    if (item !== this.selected) {
      this.selected = item;
      this.onSelect.emit(this.selected);
    }
    this.isOpen = false;
  }
}
