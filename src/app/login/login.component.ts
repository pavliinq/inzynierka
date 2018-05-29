import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  resetPassword: boolean;
  email_g : string;
  loginForm = new FormGroup({
    'loginEmail': new FormControl('', [Validators.required]),
    'loginPassword': new FormControl('', [Validators.required])
  });
  error: {name: string, message: string} = {name: '', message: ''};

  constructor(
    private authService: AuthService,
    private router: Router){ }

  get loginEmail(){
    return this.loginForm.get('loginEmail');
  }
  get loginPassword(){
    return this.loginForm.get('loginPassword');
  }

  singInWithEmail(credentials){
    let email = credentials['loginEmail'];
    let password = credentials['loginPassword'];
    this.authService.signInWithEmail(email, password);
  }


  sendResetEmail() {
      let email = (<HTMLInputElement>document.getElementById('loginEmail')).value;
      if (email != "") { 
            this.authService.resetPassword(email)
            .then(() => {this.resetPassword = true; this.email_g = email;})
            .catch(_error => {
                this.error = _error
            })
       }else {
            alert("Podaj email");
       }
  }
}

