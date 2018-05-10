import { Component, OnInit } from '@angular/core';
import { Definicja } from '../shared/definicja.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { DefinicjeService } from '../shared/definicje.service';
import { SlowaService } from '../../slowa/shared/slowa.service';
import { Slowo } from '../../slowa/shared/slowo.model';
import { isEmpty } from '@firebase/util';

@Component({
  selector: 'app-form-dodaj-definicje',
  templateUrl: './form-dodaj-definicje.component.html',
  styleUrls: ['./form-dodaj-definicje.component.css']
})
export class FormDodajDefinicjeComponent implements OnInit {
  url:string[] = window.location.href.split('/');
  strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  public slowa: Slowo;
  constructor(private db: AngularFirestore, public definicjaServe: DefinicjeService,public sloServ:SlowaService) {

    this.sloServ.getSlowa(this.url[4]).subscribe(data => {this.slowa = data.filter(c=> c.id == this.strona )[0] });
    
   }

  dodajDefinicja(f: NgForm) {
    if(f.value.definicja.length > 1 ){
      let def: Definicja = new Definicja();
      def.data_dod = new Date().toLocaleString();
      def.dislikes = [];
      def.likes = [];
      def.sumlikes=0;
      def.definicja = f.value.definicja;
      this.definicjaServe.setDefinicja(def,this.strona,this.url[4]);
      f.resetForm();
    }
  }
  ngOnInit() {

  }

}
