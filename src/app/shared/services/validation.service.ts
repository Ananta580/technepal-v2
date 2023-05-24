import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  public static getValidationErrorMessage(
    validatorName: string,
    validatorValue?: any,
    labelName?: string
  ): any {
    const config: any = {
      required: `This field is required.`,
      pattern: 'Please insert a valid value.',
      email: 'Email is not valid',
      invalidPassword:
        'Your password must be at least 8 characters long, contains a digit with no space.',
      maxlength: `The field can't contain more than ${validatorValue.requiredLength} characters.`,
      minlength: `The field must contain atleast ${validatorValue.requiredLength} characters.`,
    };

    return config[validatorName];
  }

  public static passwordValidator(control: AbstractControl): any {
    if (!control.value) {
      return;
    }

    // {8,100}           - Assert password is between 8 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    // (?!.*\s)          - Spaces are not allowed
    return control.value.match(
      /^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{8,100}$/
    )
      ? ''
      : { invalidPassword: true };
  }
}
