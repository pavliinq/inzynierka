import { Slowo } from './slowo.model';
import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SlowaService {


  slowoDocument: AngularFirestoreDocument<Slowo>;
  slowoCollection: AngularFirestoreCollection<Slowo[]>;
  slowo: Observable<Slowo[]>;
  constructor(public db: AngularFirestore) { 
    this.slowoCollection = db.collection<Slowo[]>('/slowo');
    this.slowo = this.slowoCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Slowo;
        const id = a.payload.doc.id;
        return { id, ...data };

      })

    });


  }

  getSlowa()
  {
    return this.slowo;
  }
  DeleteSlowo(idDokumentu){

    this.slowoDocument = this.db.doc('/slowo/' + idDokumentu);
  }
  
  updateSlowo( turn:Slowo, idDokumentu){
  this.slowoDocument = this.db.doc('/slowo/' + idDokumentu);
  }
  
  setSlowo( turn:Slowo){
    this.slowoCollection.add(JSON.parse(JSON.stringify(turn)));
  }

}
