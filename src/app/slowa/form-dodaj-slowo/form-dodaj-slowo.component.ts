import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Slowo } from './../shared/slowo.model';
import { SlowaService } from './../shared/slowa.service';
import { NgForm } from '@angular/forms';
import { Kurs } from '../../kursy/shared/kurs.model';
import { KursyService } from '../../kursy/shared/kursy.service';


@Component({
  selector: 'app-form-dodaj-slowo',
  templateUrl: './form-dodaj-slowo.component.html',
  styleUrls: ['./form-dodaj-slowo.component.css']
})

export class FormDodajSlowoComponent implements OnInit{
  public values = '';
  public url:string[] = window.location.href.split('/');
  kursy: Kurs[];
  onKey(event: any) { 
    this.values = event.target.value ;
  }

  
  constructor(private db: AngularFirestore, public slowoServe: SlowaService,public kursServe: KursyService) {
    this.kursServe.getKurs().subscribe(data => {this.kursy=data;})
  }
  // new Date().toLocaleString()
  dodajSlowo(f: NgForm) {
    let slo: Slowo = new Slowo();
    slo.autor = "Ble Ble";
    slo.data_dod = new Date();
    slo.dislikes = [];
    slo.likes = [];
    slo.slowo = f.value.slowo;
    slo.sumaLike=0;
    this.slowoServe.setSlowo(slo,this.url[4]);
    f.resetForm();
  }

  ngOnInit() {
  
  }
 
}
