import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Kurs } from './kurs.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KursyService {

  kursDocument: AngularFirestoreDocument<Kurs>;
  kursCollection: AngularFirestoreCollection<Kurs[]>;
  slowo: Observable<Kurs[]>;
  constructor(public db: AngularFirestore) {
    this.kursCollection = db.collection<Kurs[]>('/kursy');
    // this.slowo = this.slowoCollection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Slowo;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   })
    // });


  }


  getSlowa() {
    let sloCollection = this.db.collection<Kurs[]>('/kursy');
    this.slowo = sloCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Kurs;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });

    return this.slowo;
  }
  DeleteSlowo(idDokumentu) {
    this.kursDocument = this.db.doc('/kursy/' + idDokumentu);
    this.kursDocument.delete();
  }



  updateSlowo(kurs: Kurs, idDokumentu) {
    this.kursDocument = this.db.doc('/kursy/' + idDokumentu);
    this.kursDocument.update(kurs);
  }

  setSlowo(turn: Kurs) {
    this.kursCollection.add(JSON.parse(JSON.stringify(turn)));
  }

  

}
