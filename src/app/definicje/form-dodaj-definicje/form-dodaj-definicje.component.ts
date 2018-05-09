import { Component, OnInit } from '@angular/core';
import { Definicja } from '../shared/definicja.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { DefinicjeService } from '../shared/definicje.service';
import { SlowaService } from '../../slowa/shared/slowa.service';
import { Slowo } from '../../slowa/shared/slowo.model';

@Component({
  selector: 'app-form-dodaj-definicje',
  templateUrl: './form-dodaj-definicje.component.html',
  styleUrls: ['./form-dodaj-definicje.component.css']
})
export class FormDodajDefinicjeComponent implements OnInit {

  strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  public slowa: Slowo;
  constructor(private db: AngularFirestore, public definicjaServe: DefinicjeService,public sloServ:SlowaService) {

    this.sloServ.getSlowa().subscribe(data => {this.slowa = data.filter(c=> c.id == this.strona )[0] });
    
   }

  dodajDefinicja(f: NgForm) {
    let def: Definicja = new Definicja();
    // def.autor = "Ble Ble";
    def.data_dod = new Date().toLocaleString();
    def.dislikes = [];
    def.likes = [];
    def.definicja = f.value.definicja;
    this.definicjaServe.setDefinicja(def,this.strona);
    f.resetForm();
  }
  ngOnInit() {
  }

}
