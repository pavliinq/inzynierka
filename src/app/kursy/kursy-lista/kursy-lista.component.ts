import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { KursyService } from '../shared/kursy.service';
import { Kurs } from '../shared/kurs.model';
import { KontoService } from './../../konto/shared/konto.service'


@Component({
  selector: 'app-kursy-lista',
  templateUrl: './kursy-lista.component.html',
  styleUrls: ['./kursy-lista.component.css']
})
export class KursyListaComponent implements OnInit {
  studenci: string[] = ["franko", "koza", "woza"];
  student: string;
  values:string ='';
  strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  modo:boolean;
  onKey(event: any) { 
    this.values = event.target.value ;
    // console.log(this.values);
  }
  
  ngOnInit() {
    this.student=this.userServe.getCurUser()
    
    
  }
  kursy: Kurs[];
  autor: string;
  
 
  constructor(private db: AngularFirestore, public kursServe: KursyService,private userServe: KontoService) {
    this.kursServe.getKurs().subscribe(data => { this.kursy = data; })
    // this.student = this.studenci[Math.floor(Math.random() * this.studenci.length)];

    }
    onKeydown(egg) {
      
      this.modo=true
    }
  }

 


