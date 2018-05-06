import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Definicja } from './definicja.model';

@Injectable()
export class DefinicjeService {
  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  
  definicjaDocument: AngularFirestoreDocument<Definicja>;
  definicjaCollection: AngularFirestoreCollection<Definicja[]>;
  definicja: Observable<Definicja[]>;
  constructor(public db: AngularFirestore) {
    this.definicjaCollection = db.collection<Definicja[]>('/slowa').doc(this.current).collection('definicje');
    this.definicja = this.definicjaCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Definicja;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });




  }
  getDefinicja() {
    return this.definicja;
  }

  updateDefinicja(def: Definicja, idDokumentu) {
    this.definicjaDocument = this.db.doc('/slowa/' + this.current+'/definicje/'+idDokumentu);
    this.definicjaDocument.update(def);
  }

  setDefinicja(turn: Definicja) {
    this.definicjaCollection.add(JSON.parse(JSON.stringify(turn)));
  }

  

  

}
