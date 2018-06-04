import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import {User} from '../shared/user.model'
import { KontoService } from '../shared/konto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: User[];

  constructor(private db: AngularFirestore, private userServe: KontoService) { }

  ngOnInit() {
  }

  dodajUser(f: NgForm) {
    let user: User = new User();
    user.login = f.value.nazwaUser ;
    user.haslo = f.value.hasloUser;


    this.userServe.checkUser(user.login).subscribe(data =>{
      this.users = data
      if (this.users.length == 0) {
        this.userServe.setUser(user);
      f.resetForm();

    
     }
     else {
      // console.log("login jest juz zajety");
      
   }  
 
    } )

   
  }

}
