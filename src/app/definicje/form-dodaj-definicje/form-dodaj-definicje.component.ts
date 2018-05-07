import { Component, OnInit } from '@angular/core';
import { Definicja } from '../shared/definicja.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { DefinicjeService } from '../shared/definicje.service';

@Component({
  selector: 'app-form-dodaj-definicje',
  templateUrl: './form-dodaj-definicje.component.html',
  styleUrls: ['./form-dodaj-definicje.component.css']
})
export class FormDodajDefinicjeComponent implements OnInit {

  strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  constructor(private db: AngularFirestore, public definicjaServe: DefinicjeService) { }

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
