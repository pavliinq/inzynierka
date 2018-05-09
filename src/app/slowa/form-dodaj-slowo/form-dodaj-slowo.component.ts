import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Slowo } from './../shared/slowo.model';
import { SlowaService } from './../shared/slowa.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-dodaj-slowo',
  templateUrl: './form-dodaj-slowo.component.html',
  styleUrls: ['./form-dodaj-slowo.component.css']
})
export class FormDodajSlowoComponent implements OnInit {


  
  constructor(private db: AngularFirestore, public slowoServe: SlowaService) {
  }
  // new Date().toLocaleString()
  dodajSlowo(f: NgForm) {
    let slo: Slowo = new Slowo();
    slo.autor = "Ble Ble";
    slo.data_dod = new Date();
    slo.dislikes = [];
    slo.likes = [];
    slo.slowo = f.value.slowo;
    this.slowoServe.setSlowo(slo);
    f.resetForm();
  }

  ngOnInit() {
  }

}
