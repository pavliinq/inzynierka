import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { SlowaService } from '../shared/slowa.service';
import { Slowo } from '../shared/slowo.model';
import { KursyService } from '../../kursy/shared/kursy.service';
import { Kurs } from '../../kursy/shared/kurs.model';

@Component({
  selector: 'app-slowa-lista',
  templateUrl: './slowa-lista.component.html',
  styleUrls: ['./slowa-lista.component.css']
})

export class SlowaListaComponent implements OnInit {
  public url:string[] = window.location.href.split('/');
  autorzy = ['mua', 'bleble', 'ann', 'me','gdy','pada','deszczyk','mam','na','plecach','dreszczyk','kwiatek','smofee','smarfranek','kocyk','kotek','maupek','hustunia','swiatelka','maturaToBzdura','kartofel','grill','karkowka'];
  slowa: Slowo[];
  autor: string;

  
  @Input('values') public values: string;
  constructor(private db: AngularFirestore, public slowoServe: SlowaService,public kursServe: KursyService) {
    this.slowoServe.getSlowa(this.url[4]).subscribe(data => {
          this.slowa = data.sort((a: Slowo, b: Slowo) => {
            return  +new Date(b.data_dod) - +new Date(a.data_dod) ;
        }
      );

    });
   
    this.autor = slowoServe.getAutor();

    // this.autor = this.autorzy[Math.floor(Math.random() * this.autorzy.length)]
    
  }
  // test(){

  //   this.slowoServe.setAutor("annKu");
  //   this.autor = this.slowoServe.getAutor();
    
  // }

  //   getTime(date?: Date) {
  //     return date != null ? date.getTime() : 0;
  // }

  ngOnInit() {
    this.autor = this.slowoServe.getAutor();
   
  }
  

}
