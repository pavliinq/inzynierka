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
  definicja: Observable<Definicja[]>;
  constructor(public db: AngularFirestore) {
    // this.definicjaCollection = db.collection<Definicja[]>('/slowa').doc(current).collection('definicje');
    

  }

  
  getDefinicja(current:string,url:string) {
 

    this.definicjaCollection = this.db.collection<Definicja[]>('/kursy/'+url+'/slowa/'+current+'/definicje/');
    
     this.definicja = this.definicjaCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Definicja;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return this.definicja;
  }

  updateDefinicja(def: Definicja, idDokumentu, current,url:string) {
    
    this.definicjaDocument = this.db.doc('/kursy/'+url+'/slowa/'+current+'/definicje/'+idDokumentu);
    
    this.definicjaDocument.update(def);
  }

  setDefinicja(turn: Definicja,current,url:string) {
    this.getDefinicja(current,url);
    this.definicjaCollection.add(JSON.parse(JSON.stringify(turn)));
  }


}
