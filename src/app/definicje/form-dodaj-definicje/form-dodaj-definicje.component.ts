import { Component, OnInit, Input } from '@angular/core';
import { Definicja } from '../shared/definicja.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { DefinicjeService } from '../shared/definicje.service';
import { SlowaService } from '../../slowa/shared/slowa.service';
import { Slowo } from '../../slowa/shared/slowo.model';
import { isEmpty } from '@firebase/util';
import { DataSharingService } from '../../data-sharing.service';
import { Router } from '@angular/router';
import { KontoService } from '../../konto/shared/konto.service';
import { User } from '../../konto/shared/user.model';

@Component({
  selector: 'app-form-dodaj-definicje',
  templateUrl: './form-dodaj-definicje.component.html',
  styleUrls: ['./form-dodaj-definicje.component.css']
})
export class FormDodajDefinicjeComponent implements OnInit {
  url:string[] = window.location.href.split('/');
  strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  public slowa: Slowo;
  isUserLoggedIn: boolean;
  user: User[];
  constructor(private db: AngularFirestore, public definicjaServe: DefinicjeService,public sloServ:SlowaService, public dataSharingService: DataSharingService,private router: Router,public userServe: KontoService) {

    this.sloServ.getSlowa(this.url[4]).subscribe(data => {this.slowa = data.filter(c=> c.id == this.strona )[0] });
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
      if (this.isUserLoggedIn===false){
        this.router.navigateByUrl('/')
      }
  
      });
      this.userServe.checkUser(this.userServe.getCurUser()).subscribe(
        data => {
          this.user = data
          
        }
      )
   }

  dodajDefinicja(f: NgForm) {
    if(f.value.definicja.length > 1 ){
      let def: Definicja = new Definicja();
      def.data_dod = new Date().toLocaleString();
      def.dislikes = [];
      def.likes = [];
      def.sumlikes=0;
      def.autor=this.user[0].login
      def.definicja = f.value.definicja;
      this.definicjaServe.setDefinicja(def,this.strona,this.url[4]);
      f.resetForm();
    }
  }
  ngOnInit() {

  }

}
