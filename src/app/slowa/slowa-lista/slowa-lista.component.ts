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

  slowa: Slowo[];

  
  constructor(private db: AngularFirestore, public slowoServe: SlowaService) {
    this.slowoServe.getSlowa().subscribe(data => { this.slowa = data; });
  }

  ngOnInit() {
  }

}
