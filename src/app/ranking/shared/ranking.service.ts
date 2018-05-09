import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Ranking } from './ranking.model';

@Injectable()
export class RankingService {
  
  rankingDocument: AngularFirestoreDocument<Ranking>;
  rankingCollection: AngularFirestoreCollection<Ranking[]>;
  ranking: Observable<Ranking[]>;
  constructor(public db: AngularFirestore) {
    this.rankingCollection = db.collection<Ranking[]>('/ranking');

  }

  getRanking() {
    let rankingCollection = this.db.collection<Ranking[]>('/ranking');
    this.ranking = rankingCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Ranking;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });

    return this.ranking;
  }

  deleteRanking(idDokumentu) {
    this.rankingDocument = this.db.doc('/ranking/' + idDokumentu);
    this.rankingDocument.delete();
  }

  updateRanking(ran: Ranking, idDokumentu) {
    this.rankingDocument = this.db.doc('/slowa/' + idDokumentu);
    this.rankingDocument.update(ran);
  }

  setRanking(turn: Ranking) {
    this.rankingCollection.add(JSON.parse(JSON.stringify(turn)));
  }

}
