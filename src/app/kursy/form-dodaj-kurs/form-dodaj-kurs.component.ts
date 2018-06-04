import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Kurs } from '../shared/kurs.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { KursyService } from '../shared/kursy.service';
import { DataSharingService } from '../../data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-dodaj-kurs',
  templateUrl: './form-dodaj-kurs.component.html',
  styleUrls: ['./form-dodaj-kurs.component.css']
})
export class FormDodajKursComponent implements OnInit {
  isUserLoggedIn: boolean;
  constructor(private db: AngularFirestore, public kursServe: KursyService, public dataSharingService: DataSharingService,private router: Router) { 
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
      if (this.isUserLoggedIn===false){
        this.router.navigateByUrl('/')
      }
  
      });
  }

  ngOnInit() {
  }


  dodajKurs(f: NgForm) {
    let kurs: Kurs = new Kurs();
    kurs.nazwa = f.value.nazwaKurs ;
    kurs.data_utworzenia = new Date();
    kurs.prowadzącyimie= f.value.prowadzacyImie;
    kurs.prowadzacynazwisko=f.value.prowadzacyNazwisko
    kurs.zapisani = [];
    kurs.rokAkademicki = f.value.rokKurs;
    kurs.haslo = f.value.hasloKurs;


    
    this.kursServe.setKurs(kurs);
    f.resetForm();
  }
}
