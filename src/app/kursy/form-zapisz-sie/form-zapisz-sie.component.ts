import { Component, OnInit } from '@angular/core';
import { KursyService } from '../shared/kursy.service';
import { NgForm } from '@angular/forms';
import { Kurs } from '../shared/kurs.model';
import { RouterModule, Routes, Router } from '@angular/router';
import { KontoService } from './../../konto/shared/konto.service'

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


  zleHaslo:boolean = false ;
  dobreHaslo:boolean = false ;
  constructor(private kurSev:KursyService,private router: Router,private userServe: KontoService) { 

    this.idkursu = this.url[4];

    kurSev.getKurs().subscribe(data => this.tenKurs = data.find(k => k.id == this.idkursu) );
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
