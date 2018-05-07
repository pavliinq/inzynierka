import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Definicja } from './definicja.model';

@Injectable()
export class DefinicjeService {
  // public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  
  definicjaDocument: AngularFirestoreDocument<Definicja>;
  definicjaCollection: AngularFirestoreCollection<Definicja[]>;
  // definicja: Observable<Definicja[]>;
  
  constructor(public db: AngularFirestore) {
    // this.definicjaCollection = db.collection<Definicja[]>('/slowa').doc(current).collection('definicje');
    

  }

  
  getDefinicja(current:string) {
    let defCollection = this.db.collection<Definicja[]>('/slowa').doc(current).collection('definicje');
    let definicja:Observable<Definicja[]> = defCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Definicja;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return definicja;
  }

  updateDefinicja(def: Definicja, idDokumentu, current) {
    this.definicjaDocument = this.db.doc('/slowa/' + current+'/definicje/'+idDokumentu);
    this.definicjaDocument.update(def);
  }

  setDefinicja(turn: Definicja) {
    this.definicjaCollection.add(JSON.parse(JSON.stringify(turn)));
  }


}
