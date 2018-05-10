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
  lajkii : number;
  dislajkii: number;
  strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  test:boolean=false;
  url:string[] = window.location.href.split('/');
  ktoreikony:string;
  
 
  

  
  @Input('autor') public autor: string;
  @Input('definicja') definicja: Definicja;
  constructor(private db: AngularFirestore, public definicjaServe: DefinicjeService) { }

  ngOnInit() {
    this.lajki()
    this.przyciski()
  }
  

  przyciski(){
    while(this.test != true){
      for (let lajki of this.definicja.likes) {
        if(lajki == this.autor) {
            this.ktoreikony='1'
            this.test=true;
            break;
          }
    }
    for (let dislajki of this.definicja.dislikes) {
      if(dislajki == this.autor) {
        this.ktoreikony='2'
        this.test=true;
            break;
      }
   
    }
    if((this.ktoreikony != '1' ) && (this.ktoreikony != '2')){
      this.ktoreikony='3'
      this.test=true;
      break;
    }
    
  }

  }


  lajki(){
    
    this.lajkii =this.definicja.likes.length;
    this.dislajkii=this.definicja.dislikes.length;
    
    
    // console.log(this.definicja.sumlikes.valueOf())
    
  }  
  dajLajka() {
    
    if (this.definicja.likes.indexOf(this.autor) == -1) {
      this.definicja.likes.push(this.autor);
      
      if (this.definicja.dislikes.indexOf(this.autor) == -1) {
        this.definicja.sumlikes=this.definicja.sumlikes.valueOf()+1;
      }else{
        let index = this.definicja.dislikes.indexOf(this.autor);
        this.definicja.dislikes.splice(index, 1);
        this.definicja.sumlikes=this.definicja.sumlikes.valueOf()+2;
      }
      
    }
    else {
      let index = this.definicja.likes.indexOf(this.autor);
      this.definicja.likes.splice(index, 1);
      this.definicja.sumlikes=this.definicja.sumlikes.valueOf()-1;
  
    }
    this.definicjaServe.updateDefinicja(this.definicja, this.definicja.id,this.strona,this.url[4]);
  }
  
  dajDisLajka() {
    if (this.definicja.dislikes.indexOf(this.autor) == -1) {
      this.definicja.dislikes.push(this.autor);
      
      if (this.definicja.likes.indexOf(this.autor) == -1) {
        this.definicja.sumlikes=this.definicja.sumlikes.valueOf()-1;
      }else{
        let index = this.definicja.likes.indexOf(this.autor);
        this.definicja.likes.splice(index, 1);
        this.definicja.sumlikes=this.definicja.sumlikes.valueOf()-2;
      }


    }
    else {
      let index = this.definicja.dislikes.indexOf(this.autor);
      this.definicja.dislikes.splice(index, 1);
      this.definicja.sumlikes=this.definicja.sumlikes.valueOf()+1;
      

    }
    this.definicjaServe.updateDefinicja(this.definicja, this.definicja.id,this.strona,this.url[4]);
  }
}
