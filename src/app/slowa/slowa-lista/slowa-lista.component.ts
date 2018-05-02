import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { SlowaService } from '../shared/slowa.service';
import { Slowo } from '../shared/slowo.model';

@Component({
  selector: 'app-slowa-lista',
  templateUrl: './slowa-lista.component.html',
  styleUrls: ['./slowa-lista.component.css']
})
export class SlowaListaComponent implements OnInit {
  autorzy = ['mua', 'bleble', 'ann', 'me'];
  slowa: Slowo[];
  autor: string;

  constructor(private db: AngularFirestore, public slowoServe: SlowaService) {
    this.slowoServe.getSlowa().subscribe(data => { this.slowa = data; });
    this.autor = this.autorzy[Math.floor(Math.random() * this.autorzy.length)]
  }

  ngOnInit() {
  }

}
