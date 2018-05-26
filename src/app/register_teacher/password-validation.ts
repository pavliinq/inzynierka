import {AbstractControl} from '@angular/forms';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value;
       let confirmPassword = AC.get('confirmationPassword').value; 
        if(password != confirmPassword) {
            console.log('false');
            AC.get('confirmationPassword').setErrors( {MatchPassword: true} )
        return null
        }
    }
}