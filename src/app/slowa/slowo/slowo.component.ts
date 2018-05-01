import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Slowo } from './../shared/slowo.model';
import { SlowaService } from './../shared/slowa.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-slowo',
  templateUrl: './slowo.component.html',
  styleUrls: ['./slowo.component.css']
})
export class SlowoComponent implements OnInit {
  selectedSlowo: Slowo = new Slowo();
  public current: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

  jednoslowo: Slowo;


  constructor(private db: AngularFirestore, public slowoServe: SlowaService) {
    this.slowoServe.getSlowa().subscribe(data => { this.jednoslowo = data.find(turn => turn.id == this.current); });
  }
  dodajSlowo(f: NgForm) {
    let slo: Slowo = new Slowo();
    slo.autor = "Ble Ble";
    slo.data_dod = new Date().toLocaleString();
    slo.dislikes = [];
    slo.likes = [];
    slo.slowo = f.value.slowo;
    this.slowoServe.setSlowo(slo);
    f.resetForm();
  }


  ngOnInit() {
  }

}
