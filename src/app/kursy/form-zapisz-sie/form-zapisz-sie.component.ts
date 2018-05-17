import { Component, OnInit } from '@angular/core';
import { KursyService } from '../shared/kursy.service';
import { NgForm } from '@angular/forms';
import { Kurs } from '../shared/kurs.model';

@Component({
  selector: 'app-form-zapisz-sie',
  templateUrl: './form-zapisz-sie.component.html',
  styleUrls: ['./form-zapisz-sie.component.css']
})
export class FormZapiszSieComponent implements OnInit {
  //to osoba ktora chce sie zapisac na kurs
  studenci:string[] = ["franko","koza", "woza"];
  student:string;

  url:string[] = window.location.href.split('/');
  idkursu:string;

  tenKurs:Kurs;


  zleHaslo:boolean = false ;
  dobreHaslo:boolean = false ;
  constructor(private kurSev:KursyService) { 
    // losuje jednego studenta pozniej zamieniy to na odczyt z logowania
    this.student = this.studenci[Math.floor(Math.random() * this.studenci.length)];
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
      window.location.href='/kursy/'+this.tenKurs.id;
    }else{
      this.zleHaslo = true;
      
    }

    
    
  }

  ngOnInit() {
  }

}
