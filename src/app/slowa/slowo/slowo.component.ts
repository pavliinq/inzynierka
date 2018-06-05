import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Slowo } from './../shared/slowo.model';
import { SlowaService } from './../shared/slowa.service';
import { NgForm } from '@angular/forms';
import { KontoService } from '../../konto/shared/konto.service';
import { User } from '../../konto/shared/user.model';


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
  test:boolean=false;
  lajkii : number;
  dislajkii: number;
  ktoreikony:string;
  url:string[] = window.location.href.split('/');
  user: User[];
  account_type: string;
  constructor(private db: AngularFirestore, public slowoServe: SlowaService,private userServe: KontoService) {
    this.userServe.checkUser(this.userServe.getCurUser()).subscribe(
      data => {
        this.user = data
        if (this.user.length == 0) {
        } else {
          this.account_type = this.user[0].account_type
        }



      }
    )
    
  
  }
  delete(){
    this.slowoServe.DeleteSlowo(this.slowo.id,this.url[4])
  }
  dajLajka() {
    
    if (this.slowo.likes.indexOf(this.autor) == -1) {
      this.slowo.likes.push(this.autor);
      if (this.slowo.dislikes.indexOf(this.autor) == -1) {
        this.slowo.sumaLike=this.slowo.sumaLike.valueOf()+1;
      }else{
        let index = this.slowo.dislikes.indexOf(this.autor);
        this.slowo.dislikes.splice(index, 1);
        this.slowo.sumaLike=this.slowo.sumaLike.valueOf()+2;
      }
    }
    else {
      let index = this.slowo.likes.indexOf(this.autor);
      this.slowo.likes.splice(index, 1);
      this.slowo.sumaLike=this.slowo.sumaLike.valueOf()-1;
    }
    this.slowoServe.updateSlowo(this.slowo, this.slowo.id,this.url[4]);
  }
  
  dajDisLajka() {
    if (this.slowo.dislikes.indexOf(this.autor) == -1) {
      this.slowo.dislikes.push(this.autor);
      if (this.slowo.likes.indexOf(this.autor) == -1) {
        this.slowo.sumaLike=this.slowo.sumaLike.valueOf()-1;
      }else{
        let index = this.slowo.likes.indexOf(this.autor);
        this.slowo.likes.splice(index, 1);
        this.slowo.sumaLike=this.slowo.sumaLike.valueOf()-2;
      }
    }
    else {
      let index = this.slowo.dislikes.indexOf(this.autor);
      this.slowo.dislikes.splice(index, 1);
      this.slowo.sumaLike=this.slowo.sumaLike.valueOf()+1;
    }
    this.slowoServe.updateSlowo(this.slowo, this.slowo.id,this.url[4]);
  }

  przyciski(){
    while(this.test != true){
      for (let lajki of this.slowo.likes) {
        if(lajki == this.autor) {
            this.ktoreikony='1'
            this.test=true;
            break;
          }
    }
    for (let dislajki of this.slowo.dislikes) {
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
    
  this.lajkii =this.slowo.likes.length;
  this.dislajkii=this.slowo.dislikes.length;
  
  
  // console.log(this.definicja.sumlikes.valueOf())
  
} 

  

  ngOnInit() {
    this.lajki()
    this.przyciski()
    
  }

}
