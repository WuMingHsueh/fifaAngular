import { ValidatorFn, AbstractControl,  FormGroup } from '@angular/forms' ;

export function PasswordCompareValidator(formGroupName: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    if (!control['parent']) return null;
    const matchTarget = control['parent']['value'][formGroupName];
    const match = control.value === matchTarget;
    return match? null : {'passwordConfirm': true};
  };
}
