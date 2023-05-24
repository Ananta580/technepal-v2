import { Component, Input, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent {
  @Input()
  public errorControl!: AbstractControl;

  @Input()
  public errorLabelName?: string;

  @Input() placeholder: string = '';
  @Input() autocomplete = 'off';
  @Input()
  type: string = 'text';

  @Input()
  label: string = '';

  @Input()
  disabled = false;

  @Input() id = '';
  @Input() paddingClass = 'py-6 px-4';

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
