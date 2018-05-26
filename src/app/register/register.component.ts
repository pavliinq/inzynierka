import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PasswordValidation } from './password-validation';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signUpForm = new FormGroup({
    'firstName': new FormControl('', [Validators.required]),
    'lastName': new FormControl('', [Validators.required]),
    'registrationEmail': new FormControl('', [Validators.required, Validators.pattern('[0-9]+\@student\.pwr\.edu\.pl')]),
    'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,12})$/)]),
    'confirmationPassword': new FormControl('', [Validators.required])
  }, PasswordValidation.MatchPassword);
  error: { name: string, message: string } = { name: '', message: '' };
  email: string;
  password_: string;
  confirmationPassword_: string;

  constructor(
    private authService: AuthService,
    private router: Router) { }


  signUpWithEmail(signUpFormValue) {
    this.setCredentials(signUpFormValue);
    this.authService.signUpWithEmail(this.email, this.password_)
      .then(() => {
        this.router.navigate(['/'])
        alert('Link aktywacyjny zostal wyslany na podany adres e-mail!')
      }).catch(_error => {
        this.error = _error
        console.log(this.error);
      })
  }

  private setCredentials(signUpFormValue: any) {
    this.email = signUpFormValue['registrationEmail'];
    this.password_ = signUpFormValue['password'];
    this.confirmationPassword_ = signUpFormValue['confirmationPassword'];
  };

  get confirmationPassword() {
    return this.signUpForm.get('confirmationPassword');
  };
  get registrationEmail() {
    return this.signUpForm.get('registrationEmail');
  };
  get firstName() {
    return this.signUpForm.get('firstName');
  };
  get lastName() {
    return this.signUpForm.get('lastName');
  };

  get password() {
    return this.signUpForm.get('password');
  };


}
