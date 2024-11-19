import { CanDeactivateFn } from '@angular/router';
import { FormComponent } from '../components/form/form.component';

export const formDeactivateGuard: CanDeactivateFn<FormComponent> =
  (component: FormComponent) => {
    if (component.formGroup.dirty) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  };