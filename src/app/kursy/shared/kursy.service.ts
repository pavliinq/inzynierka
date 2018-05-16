import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Kurs } from './kurs.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KursyService {

  kursDocument: AngularFirestoreDocument<Kurs>;
  kursCollection: AngularFirestoreCollection<Kurs[]>;
  kurs: Observable<Kurs[]>;
  constructor(public db: AngularFirestore) {
    this.kursCollection = db.collection<Kurs[]>('/kursy');


  }


  getKurs() {
    let kursCollection = this.db.collection<Kurs[]>('/kursy');
    this.kurs = kursCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Kurs;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });

    return this.kurs;
  }
  DeleteKurs(idDokumentu) {
    this.kursDocument = this.db.doc('/kursy/' + idDokumentu);
    this.kursDocument.delete();
  }



  updateKurs(kurs: Kurs, idDokumentu) {
    this.kursDocument = this.db.doc('/kursy/' + idDokumentu);
    this.kursDocument.update(kurs);
  }

  setKurs(turn: Kurs) {
    this.kursCollection.add(JSON.parse(JSON.stringify(turn)));
  }

  

}
