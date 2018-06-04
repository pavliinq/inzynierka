import { Component, OnInit } from '@angular/core';
import { Kurs } from '../shared/kurs.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { KursyService } from '../shared/kursy.service';
import { KontoService } from './../../konto/shared/konto.service'
import { User } from '../../konto/shared/user.model';


@Component({
  selector: 'app-moje-kursy-lista',
  templateUrl: './moje-kursy-lista.component.html',
  styleUrls: ['./moje-kursy-lista.component.css']
})
export class MojeKursyListaComponent implements OnInit {
  values: string = '';
  strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

  kursy: Kurs[];
  autor: string;

  student:string 
  zapisany_test: number;

  user: User[];
  account_type: string;

  constructor(private db: AngularFirestore, public kursServe: KursyService,private userServe: KontoService) {
   
    this.kursServe.getKurs().subscribe(data => {
       this.kursy = data.filter(
          k => k.zapisani[k.zapisani.findIndex( z => z == this.student)] == this.student 
        )
        this.userServe.checkUser(this.userServe.getCurUser()).subscribe(
          data => {
            this.user = data
            if (this.user.length == 0) {
            } else {
              this.account_type = this.user[0].account_type
            }
  
  
  
          }
        )})
    
  }
  onKey(event: any) {
    this.values = event.target.value;

  }
  ngOnInit() {
    this.student=this.userServe.getCurUser()
  }
  
}
