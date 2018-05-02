import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Slowo } from './../shared/slowo.model';
import { SlowaService } from './../shared/slowa.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-slowo',
  templateUrl: './slowo.component.html',
  styleUrls: ['./slowo.component.css']
})
export class SlowoComponent implements OnInit {
  // selectedSlowo: Slowo = new Slowo();
  // public current: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  autorzy = ['mua', 'kicia', 'piesku', 'ann', 'mat'];
  autor: string;
  @Input('slowo') slowo: Slowo;

  constructor(private db: AngularFirestore, public slowoServe: SlowaService) {
    this.autor = this.autorzy[Math.floor(Math.random() * this.autorzy.length)];
  }
  dajLajka() {
    if (this.slowo.likes.indexOf(this.autor) == -1) {
      this.slowo.likes.push(this.autor);
      console.log(this.slowo.likes)
      this.slowoServe.updateSlowo(this.slowo, this.slowo.id);
    }
  }
  dajDisLajka() {
    if (this.slowo.dislikes.indexOf(this.autor) == -1) {
      this.slowo.dislikes.push(this.autor);
      this.slowoServe.updateSlowo(this.slowo, this.slowo.id);
    }
  }


  ngOnInit() {
  }

}
