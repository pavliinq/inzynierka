import { DataSharingService } from './../../data-sharing.service';
import { Component, OnInit, Input } from '@angular/core';
import { Kurs } from '../shared/kurs.model';
import { KursyService } from '../shared/kursy.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { KontoService } from '../../konto/shared/konto.service';
import { User } from '../../konto/shared/user.model';

@Component({
  selector: 'app-kurs',
  templateUrl: './kurs.component.html',
  styleUrls: ['./kurs.component.css']
})


export class KursComponent implements OnInit {
  isUserLoggedIn: boolean;
  zapisany_test: number;
  url:string[] = window.location.href.split('/');
  usertype: User[];
  account_type: string;
  @Input('kurs') kurs: Kurs;
  @Input('user') user: string;
  constructor(private db: AngularFirestore, public kursServe: KursyService,public dataSharingService: DataSharingService,private userServe: KontoService) {
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  }
);
this.userServe.checkUser(this.userServe.getCurUser()).subscribe(
  data => {
    this.usertype = data
    if (this.user.length == 0) {
    } else {
      this.account_type = this.usertype[0].account_type
    }



  }
)

  }

  ngOnInit() {
    // console.log(this.user);
    this.czyzapisany()

  }

  czyzapisany() {
    this.zapisany_test = 0;
    for (let zapisany of this.kurs.zapisani) {
      
      if (zapisany === this.user) {
        
        this.zapisany_test = ++this.zapisany_test;
        
      }
    }


  }
  delete() {
    this.kursServe.DeleteKurs(this.kurs.id)


  }
}
