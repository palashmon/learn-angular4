import { AbstractControl, ValidationErrors } from '@angular/forms';

// Create a custom validator
export class UsernameValidators {

    // Create a static method
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).includes(' ')) {
            return { cannotContainSpace: true };
        }
        return null;
    }
}
