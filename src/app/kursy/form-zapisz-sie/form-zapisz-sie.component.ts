import { Component, OnInit } from '@angular/core';
import { KursyService } from '../shared/kursy.service';

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
  constructor(kurSev:KursyService) { 
    // losuje jednego studenta pozniej zamieniy to na odczyt z logowania
    this.student = this.studenci[Math.floor(Math.random() * this.studenci.length)];
    this.idkursu = this.url[4];
  }

  zapiszSie(){
    // tu trzeba użyć funkcji update z servisu
  }

  ngOnInit() {
  }

}
