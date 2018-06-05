import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { KontoService } from '../konto/shared/konto.service';
import { User } from '../konto/shared/user.model';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {

  users: User[];
  user: User;
  
  constructor(private db: AngularFirestore,public userServe: KontoService) { 
    this.userServe.getUsers().subscribe(data => {
      this.users = data;
    }
  );


  }

  delete(id:string) {
    this.userServe.deleteUser(id)


  }
  change_account_type(id:string,type?:string){
    let unsub = this.userServe.getUsers().subscribe(data=> {this.user=data.filter(k => k.id==id)[0];
      console.log(this.user)
      this.user.account_type=type;
      this.userServe.updateUser(this.user,id)
      unsub.unsubscribe()
      
    })
    
    
    
    
    

  }
  ngOnInit() {
  }

}
