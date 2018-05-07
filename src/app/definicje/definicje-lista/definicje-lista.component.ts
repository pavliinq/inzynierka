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
  order: string = 'likes'
  definicje: Definicja[];
  autorzy = ['mua', 'bleble', 'ann', 'me'];
  autor: string;
  strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  public slowa: Slowo[];

  // slowoDocument: AngularFirestoreDocument<Slowo>;
  // slowoCollection: AngularFirestoreCollection<Slowo[]>;
  // slowo: Observable<Slowo[]>;

  constructor(private db: AngularFirestore, public definicjaServe: DefinicjeService,public sloServ:SlowaService) {
    this.definicjaServe.getDefinicja(this.strona).subscribe(data => { this.definicje = data; })


    this.autor = this.autorzy[Math.floor(Math.random() * this.autorzy.length)]

    // this.slowoCollection = db.collection<Slowo[]>('/slowa',ref => {return ref.where('id','==',this.strona)});
    // this.slowo = this.slowoCollection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Slowo;
    //     const id = a.payload.doc.id;
        
    //     return {id,...data };
        
    //   })
    // });
    // this.slowo.subscribe(data => { this.slowa = data });
    
    this.sloServ.getSlowa().subscribe(data => {this.slowa = data.filter(c=> c.id == this.strona ) })
  }
  
  ngOnInit() {
  }

}
