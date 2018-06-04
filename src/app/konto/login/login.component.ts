import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import {User} from '../shared/user.model'
import { KontoService } from '../shared/konto.service';
import {DataSharingService} from '../../data-sharing.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  corectUser : boolean = true;

  constructor(private db: AngularFirestore, private userServe: KontoService,private dataSharingService: DataSharingService,private router: Router) { }

  ngOnInit() {
  }
  loginUser(f: NgForm) {
    // let user: User = new User();
  

 
    this.userServe.getUser(f.value.nazwaUser,f.value.hasloUser).subscribe(data => { 
      this.users = data 
      if (this.users.length == 0) {
        // jakis komunikat w htmlu by sie przydał
        // console.log("bledny login lub haslo");
        this.corectUser = false;
     } else {
       
        this.userServe.setCurUser(this.users[0].login)
        this.dataSharingService.isUserLoggedIn.next(true);
        
        this.router.navigateByUrl('/')
     }     
    
    
    
    },
      )
    // setTimeout(() => {

     
    //       }, 2000);
    
    
  
    

    
  


    // f.resetForm();
  }

}
