import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {
  authState: any = null;
  errorMessage: string;
  router: Router;

  constructor(public afAuth: AngularFireAuth, router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
    this.router = router;
  }

 resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then(() => console.log('sent Password Reset Email!'))
      .catch((error) => console.log(error))
  }


signUpWithEmail(email: string, password: string) {
  return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      this.authState = user
      this.sendAuthEmail(user);
    })
    .catch(error => {
      console.log(error);
    });

}

signInWithEmail(email: string, password: string) {
  return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      this.authState = user
      if (!user.emailVerified){
        alert("Twoje konto nie jest aktywne!");
      } else {
      this.router.navigate(['/kursy'])
      alert("Jestes zalogowany!");
    }

    })
    .catch(error => {
      this.errorMessage = error.message;
      throw error;
    });
}

sendAuthEmail(user){

  user.sendEmailVerification().then(function() {
    // Email sent.
  }).catch(function(error) {
    console.log(error);
  });
}


logOut(){
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
    alert('Zostales wylogowany!');
}

getCurrentUser(){
  return new Promise<any>((resolve, reject) => {
    var user = this.afAuth.auth.onAuthStateChanged(function(user){
      if (user) {
        resolve(user);
      } else {
        reject('No user logged in');
      }
    })
  })
}

}


