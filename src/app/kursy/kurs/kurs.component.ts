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
  @Input('kurs') kurs: Kurs;
  constructor(private db: AngularFirestore, public kursServe: KursyService) { }

  ngOnInit() {
    
    
  }
  

}
