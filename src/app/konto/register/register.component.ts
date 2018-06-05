import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import {User} from '../shared/user.model'
import { KontoService } from '../shared/konto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: User[];

  constructor(private db: AngularFirestore, private userServe: KontoService,private router: Router) { }

  ngOnInit() {
  }

  dodajUser(f: NgForm) {
    let user: User = new User();
    user.login = f.value.nazwaUser ;
    user.haslo = f.value.hasloUser;
    user.account_type = '2';


    this.userServe.checkUser(user.login).subscribe(data =>{
      this.users = data
      if (this.users.length == 0) {
        this.userServe.setUser(user);
        this.router.navigateByUrl('/')
      f.resetForm();

    
     }
     else {
      // console.log("login jest juz zajety");
      
   }  
 
    } )

   
  }

}
