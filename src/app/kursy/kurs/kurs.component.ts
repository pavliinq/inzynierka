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
  studenci: string[] = ["franko", "koza", "woza"];
  student: string;
  zapisany_test: number;

  @Input('kurs') kurs: Kurs;
  constructor(private db: AngularFirestore, public kursServe: KursyService) {
    this.student = this.studenci[Math.floor(Math.random() * this.studenci.length)];

  }

  ngOnInit() {
    this.czyzapisany()

  }

  czyzapisany() {
    this.zapisany_test = 0;
    for (let zapisany of this.kurs.zapisani) {
      if (zapisany === this.student) {
        this.zapisany_test = ++this.zapisany_test;
      }
    }


  }
}
