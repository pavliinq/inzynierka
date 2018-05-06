import { Component, OnInit, Input } from '@angular/core';
import { Definicja } from '../shared/definicja.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { DefinicjeService } from '../shared/definicje.service';

@Component({
  selector: 'app-definicja',
  templateUrl: './definicja.component.html',
  styleUrls: ['./definicja.component.css']
})

export class DefinicjaComponent implements OnInit {

  @Input('autor') autor: string;
  @Input('definicja') definicja: Definicja;
  constructor(private db: AngularFirestore, public definicjaServe: DefinicjeService) { }

  ngOnInit() {
  }

  dajLajka() {
    console.log(this.autor);
    if (this.definicja.likes.indexOf(this.autor) == -1) {
      this.definicja.likes.push(this.autor);
    }
    else {
      let index = this.definicja.likes.indexOf(this.autor);
      this.definicja.likes.splice(index, 1);
    }
    this.definicjaServe.updateDefinicja(this.definicja, this.definicja.id);
  }
  
  dajDisLajka() {
    if (this.definicja.dislikes.indexOf(this.autor) == -1) {
      this.definicja.dislikes.push(this.autor);
    }
    else {
      let index = this.definicja.dislikes.indexOf(this.autor);
      this.definicja.dislikes.splice(index, 1);
    }
    this.definicjaServe.updateDefinicja(this.definicja, this.definicja.id);
  }
}
