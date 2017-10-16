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

    // Create a static method to simulate async server call
    // and check if username is unique or not
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if ((control.value as string).trim() === 'palash') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
