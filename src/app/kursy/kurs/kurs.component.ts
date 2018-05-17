import { Component, OnInit, Input } from '@angular/core';
import { Kurs } from '../shared/kurs.model';
import { KursyService } from '../shared/kursy.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-kurs',
  templateUrl: './kurs.component.html',
  styleUrls: ['./kurs.component.css']
})

export class KursComponent implements OnInit {
  
  zapisany_test: number;

  @Input('kurs') kurs: Kurs;
  @Input('user') user: string;
  constructor(private db: AngularFirestore, public kursServe: KursyService) {
    

  }

  ngOnInit() {
    console.log(this.user);
    this.czyzapisany()

  }

  czyzapisany() {
    this.zapisany_test = 0;
    for (let zapisany of this.kurs.zapisani) {
      
      if (zapisany === this.user) {
        
        this.zapisany_test = ++this.zapisany_test;
        
      }
    }


  }
}
