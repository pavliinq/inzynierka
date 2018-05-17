import { Component, OnInit } from '@angular/core';
import { Kurs } from '../shared/kurs.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { KursyService } from '../shared/kursy.service';

@Component({
  selector: 'app-moje-kursy-lista',
  templateUrl: './moje-kursy-lista.component.html',
  styleUrls: ['./moje-kursy-lista.component.css']
})
export class MojeKursyListaComponent implements OnInit {
  values: string = '';
  strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  // studenci:string[] = ["franko","koza", "woza"];
  // student:string;
  kursy: Kurs[];
  autor: string;
  studenci: string[] = ["franko", "koza", "woza"];
  student: string;
  zapisany_test: number;
// na razie dziala tylko dla studnta franko
  constructor(private db: AngularFirestore, public kursServe: KursyService) {
    // this.student = this.studenci[Math.floor(Math.random() * this.studenci.length)];
    //trzeba zrobić filtrowanie studnta
    this.kursServe.getKurs().subscribe(data => {
       this.kursy = data.filter(
          k => k.zapisani[k.zapisani.findIndex( z => z == "franko")] == "franko" 
        )})
    
  }
  onKey(event: any) {
    this.values = event.target.value;

  }
  ngOnInit() {
    

  }
  
}
