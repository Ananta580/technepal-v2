import { Component, Input } from '@angular/core';
import { ValidationService } from '../../services/validation.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent {
  @Input()
  public errorControl!: AbstractControl;

  @Input()
  public errorLabelName?: string;

  @Input() placeholder: string = '';
  @Input()
  label: string = '';

  @Input()
  disabled = false;

  @Input() id = '';
  @Input() inputClass = '';

  @Input() rows = 1;
  @Input() cols = 12;

  value = '';

  onChange: any = () => {};
  onTouched: any = () => {};
  showPassword = false;
  constructor() {}

  ngOnInit(): void {}

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get errorMessage(): any {
    if (this.errorControl) {
      for (const propertyName in this.errorControl.errors) {
        if (this.errorControl.errors.hasOwnProperty(propertyName)) {
          if (
            this.errorControl.invalid &&
            (this.errorControl.touched || this.errorControl.dirty)
          ) {
            const vv = ValidationService.getValidationErrorMessage(
              propertyName,
              this.errorControl.errors[propertyName],
              this.errorLabelName
            );
            return vv;
          }
        }
      }
    }

    return false;
  }
}
