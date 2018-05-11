import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Kurs } from '../shared/kurs.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { KursyService } from '../shared/kursy.service';

@Component({
  selector: 'app-form-dodaj-kurs',
  templateUrl: './form-dodaj-kurs.component.html',
  styleUrls: ['./form-dodaj-kurs.component.css']
})
export class FormDodajKursComponent implements OnInit {

  constructor(private db: AngularFirestore, public kursServe: KursyService) { }

  ngOnInit() {
  }

  dodajKurs(f: NgForm) {
    let kurs: Kurs = new Kurs();
    kurs.nazwa = f.value.nazwaKurs ;
    kurs.data_utworzenia = new Date();
    kurs.prowadzącyimie= f.value.prowadzacyImie;
    kurs.prowadzacynazwisko=f.value.prowadzacyNazwisko
    kurs.zapisani = ['franko',"koza", "woza"];
    kurs.rokAkademicki = f.value.rokKurs;
    kurs.haslo = f.value.hasloKurs;


    
    this.kursServe.setKurs(kurs);
    f.resetForm();
  }
}
