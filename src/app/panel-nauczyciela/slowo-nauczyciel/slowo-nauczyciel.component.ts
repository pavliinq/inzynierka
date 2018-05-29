import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
 
import { NgForm } from '@angular/forms';
import { SlowaService } from '../../slowa/shared/slowa.service';
import { Slowo } from '../../slowa/shared/slowo.model';

@Component({
  selector: 'app-slowo-nauczyciel',
  templateUrl: './slowo-nauczyciel.component.html',
  styleUrls: ['./slowo-nauczyciel.component.css']
})
export class SlowoNauczycielComponent implements OnInit {

  // autor: string;
  @Input('autor') autor: string;
  @Input('slowo') slowo: Slowo;
  @Input('course') course


  dlugosc:number;
  test:boolean=false;
  lajkii : number;
  dislajkii: number;
  ktoreikony:string;
  backgroundColor:string;
  url:string[] = window.location.href.split('/');
  constructor(private db: AngularFirestore, public slowoServe: SlowaService) {
    
  
  }
 
lajki(){
   
  this.lajkii =this.slowo.likes.length;
  this.dislajkii=this.slowo.dislikes.length;
  // ustaw także kolor backgroundu w zależności od ilości lajków
  if(this.dislajkii > 20 )
  this.backgroundColor  =   '#ff010126';
   else if(this.dislajkii >= 15  &&  this.dislajkii < 20  )
  this.backgroundColor  =   '#fbd20d5c';
   else  
  this.backgroundColor  =   '#0dfb535c';
 
} 


deleteForTeacher(word)
{ 
  word.teacherOff = true
  this.slowoServe.updateSlowo(word, word.id, this.course.id );
}

  

  ngOnInit() {
     
    this.lajki()
  
  }

}
