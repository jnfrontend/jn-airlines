import {FormControl, ValidationErrors} from '@angular/forms';

export const flightCodeValidator = (formControl: FormControl): ValidationErrors | null => {
    return (formControl.value as string).startsWith('JN') ? null : { incorrectCode: true };
}
