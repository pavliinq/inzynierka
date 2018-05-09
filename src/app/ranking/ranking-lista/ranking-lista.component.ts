import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Ranking } from '../shared/ranking.model';
import { RankingService } from '../shared/ranking.service';

@Component({
  selector: 'app-ranking-lista',
  templateUrl: './ranking-lista.component.html',
  styleUrls: ['./ranking-lista.component.css']
})
export class RankingListaComponent implements OnInit {
  rankingLista: Ranking[];
  
  constructor(private db: AngularFirestore, public rankingServe: RankingService) {
    this.rankingServe.getRanking().subscribe(data => { this.rankingLista = data; });
  }

  ngOnInit() {
  }

}
