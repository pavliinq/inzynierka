import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { KursyService } from '../shared/kursy.service';
import { Kurs } from '../shared/kurs.model';
import { KontoService } from './../../konto/shared/konto.service'
import { DataSharingService } from './../../data-sharing.service';
import { User } from '../../konto/shared/user.model';

@Component({
  selector: 'app-kursy-lista',
  templateUrl: './kursy-lista.component.html',
  styleUrls: ['./kursy-lista.component.css']
})
export class KursyListaComponent implements OnInit {
  isUserLoggedIn: boolean;
  studenci: string[] = ["franko", "koza", "woza"];
  student: string;
  values:string ='';
  user: User[];
  account_type: string;

  strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  modo:boolean;
  onKey(event: any) { 
    this.values = event.target.value ;
    // console.log(this.values);
  }
  
  ngOnInit() {
    this.student=this.userServe.getCurUser()
    
    
  }
  kursy: Kurs[];
  autor: string;
  
 
  constructor(private db: AngularFirestore, public kursServe: KursyService,private userServe: KontoService, public dataSharingService: DataSharingService) {
    this.kursServe.getKurs().subscribe(data => { this.kursy = data; })
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
      this.userServe.checkUser(this.userServe.getCurUser()).subscribe(
        data => {
          this.user = data
          if (this.user.length == 0) {
          } else {
            this.account_type = this.user[0].account_type
          }



        }
      )
  });
    // this.student = this.studenci[Math.floor(Math.random() * this.studenci.length)];

    }
    onKeydown(egg) {
      
      this.modo=true
    }
  }

 


