import { Slowo } from './slowo.model';
import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SlowaService {
  autor:string;

  slowoDocument: AngularFirestoreDocument<Slowo>;
  slowoCollection: AngularFirestoreCollection<Slowo[]>;
  slowo: Observable<Slowo[]>;
  constructor(public db: AngularFirestore) {
    this.autor = "radek";
    

  }


  getSlowa(url) {
    this.slowoCollection = this.db.collection<Slowo[]>('/kursy/'+url+'/slowa/');
    this.slowo = this.slowoCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Slowo;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });

    return this.slowo;
  }
  
  DeleteSlowo(idDokumentu,url) {
    this.slowoDocument = this.db.doc('/kursy/'+url+'/slowa/' + idDokumentu);
    this.slowoDocument.delete();
  }



  updateSlowo(slo: Slowo, idDokumentu,url) {
    this.slowoDocument = this.db.doc('/kursy/'+url+'/slowa/' + idDokumentu);
    this.slowoDocument.update(slo);
  }

  setSlowo(turn: Slowo,url:string) {
    this.getSlowa(url);
    this.slowoCollection.add(JSON.parse(JSON.stringify(turn)));
  }

  getAutor(){
    return this.autor;
  }

  setAutor(newAutor:string){
    this.autor = newAutor;
    
    
  }

}
