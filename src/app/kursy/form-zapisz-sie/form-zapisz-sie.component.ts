import { Component, OnInit } from '@angular/core';
import { KursyService } from '../shared/kursy.service';
import { NgForm } from '@angular/forms';
import { Kurs } from '../shared/kurs.model';
import { RouterModule, Routes, Router } from '@angular/router';
import { KontoService } from './../../konto/shared/konto.service'
import { DataSharingService } from '../../data-sharing.service';

@Component({
  selector: 'app-form-zapisz-sie',
  templateUrl: './form-zapisz-sie.component.html',
  styleUrls: ['./form-zapisz-sie.component.css']
})
export class FormZapiszSieComponent implements OnInit {

  studenci:string[] = ["franko","koza", "woza"];
  student:string;

  url:string[] = window.location.href.split('/');
  idkursu:string;

  tenKurs:Kurs;

  isUserLoggedIn: boolean;

  zleHaslo:boolean = false ;
  dobreHaslo:boolean = false ;
  constructor(private kurSev:KursyService,private userServe: KontoService,public dataSharingService: DataSharingService,private router: Router) { 

    this.idkursu = this.url[4];

    kurSev.getKurs().subscribe(data => this.tenKurs = data.find(k => k.id == this.idkursu) );
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
      if (this.isUserLoggedIn===false){
        this.router.navigateByUrl('/')
      }
  
      });
  }

  zapiszSie(f: NgForm) {
    if(f.value.hasloKurs == this.tenKurs.haslo){
      
      this.zleHaslo = false;
      this.tenKurs.zapisani.push(this.student);

      this.kurSev.updateKurs(this.tenKurs, this.idkursu);
      f.resetForm();
      this.dobreHaslo = true;
      setTimeout(
        this.router.navigateByUrl('/kursy/'+this.tenKurs.id)
      , 20000);
      
      
    }else{
      this.zleHaslo = true;
      
    }

    
    
  }

  ngOnInit() {
    this.student=this.userServe.getCurUser()
  }

}
