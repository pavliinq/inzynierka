import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { DefinicjaComponent } from '../definicja/definicja.component';
import { DefinicjeService } from '../shared/definicje.service';
import { Definicja } from '../shared/definicja.model';
import { Observable } from 'rxjs/Observable';
import { Slowo } from '../../slowa/shared/slowo.model';
import {KeysPipePipe} from '../shared/keys-pipe.pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { SlowaService } from '../../slowa/shared/slowa.service';

@Component({
  selector: 'app-definicje-lista',
  templateUrl: './definicje-lista.component.html',
  styleUrls: ['./definicje-lista.component.css']
})
export class DefinicjeListaComponent implements OnInit {
  order: string = 'sumlikes'
  definicje: Definicja[];
  url:string[] = window.location.href.split('/');
  // autorzy = ['mua', 'bleble', 'ann', 'me'];
  autorzy = ['mua', 'bleble', 'ann', 'me','gdy','pada','deszczyk','mam','na','plecach','dreszczyk','kwiatek','smofee','smarfranek','kocyk','kotek','maupek','hustunia','swiatelka','maturaToBzdura','kartofel','grill','karkowka'];  
  autor: string;
  strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  public slowa: Slowo[];



  constructor(private db: AngularFirestore, public definicjaServe: DefinicjeService,public sloServ:SlowaService) {
    this.definicjaServe.getDefinicja(this.strona,this.url[4]).subscribe(data => { this.definicje = data; })


    this.autor = this.autorzy[Math.floor(Math.random() * this.autorzy.length)]
   
  }
  
  ngOnInit() {
  }
  

}
