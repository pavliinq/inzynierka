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

  // autor: string;
  @Input('autor') autor: string;
  @Input('slowo') slowo: Slowo;
  @Input('values') public values: string;


  public dlugosc:number;
  

  constructor(private db: AngularFirestore, public slowoServe: SlowaService) {
    
  
  }
  dajLajka() {
    
    if (this.slowo.likes.indexOf(this.autor) == -1) {
      this.slowo.likes.push(this.autor);
    }
    else {
      let index = this.slowo.likes.indexOf(this.autor);
      this.slowo.likes.splice(index, 1);
    }
    this.slowoServe.updateSlowo(this.slowo, this.slowo.id);
  }


  
  
  dajDisLajka() {
    if (this.slowo.dislikes.indexOf(this.autor) == -1) {
      this.slowo.dislikes.push(this.autor);
    }
    else {
      let index = this.slowo.dislikes.indexOf(this.autor);
      this.slowo.dislikes.splice(index, 1);
    }
    this.slowoServe.updateSlowo(this.slowo, this.slowo.id);
  }


  

  ngOnInit() {
    
    
  }

}
