import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Slowo } from './../shared/slowo.model';
import { SlowaService } from './../shared/slowa.service';
import { NgForm } from '@angular/forms';
import { Kurs } from '../../kursy/shared/kurs.model';
import { KontoService } from './../../konto/shared/konto.service'
import { KursyService } from '../../kursy/shared/kursy.service';
import {DataSharingService} from '../../data-sharing.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-dodaj-slowo',
  templateUrl: './form-dodaj-slowo.component.html',
  styleUrls: ['./form-dodaj-slowo.component.css']
})

export class FormDodajSlowoComponent implements OnInit{
  public values = '';
  public url:string[] = window.location.href.split('/');
  kurs: Kurs;
  onKey(event: any) { 
    this.values = event.target.value ;
  }

  isUserLoggedIn: boolean;

  
  constructor(private db: AngularFirestore, public slowoServe: SlowaService,public kursServe: KursyService, public userServe: KontoService, public dataSharingService: DataSharingService,private router: Router) {
    this.kursServe.getKurs().subscribe(data => {this.kurs=data.filter(k => k.id==this.url[4])[0];});
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
      if (this.isUserLoggedIn===false){
        this.router.navigateByUrl('/')
      }
  
      });
  }

  dodajSlowo(f: NgForm) {
    let slo: Slowo = new Slowo();
    slo.autor = this.userServe.getCurUser()
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
