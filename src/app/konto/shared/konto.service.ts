import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KontoService {

  userDocument: AngularFirestoreDocument<User>;
  userCollection: AngularFirestoreCollection<User[]>;
  user: Observable<User[]>;
  curUser:string;
  constructor(public db: AngularFirestore) {
    this.userCollection = db.collection<User[]>('/users');
    this.curUser = "";
  
  }



  getCurUser(){
    return this.curUser;
  }

  setCurUser(newAutor:string){
    this.curUser = newAutor;
    
    
  }

  getUser(login?:string, haslo?:string) {
    

    let userCollection = this.db.collection<User>('/users', ref => {
      return ref.where('login', '==', login).where('haslo', '==', haslo)
    });
    let user = userCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        
        return { id, ...data };
      })
    });

    return user;
  }


  getUsers() {
    

    let userCollection = this.db.collection<User>('/users');
    let user = userCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        
        return { id, ...data };
      })
    });

    return user;
  }
  updateUser(user: User, idDokumentu) {
    
    this.userDocument = this.db.doc('/users/'+idDokumentu);
    
    this.userDocument.update(user);
  }
  setUser (user: User) {
    
    this.userCollection.add(JSON.parse(JSON.stringify(user)));
}

checkUser(login?:string) {
  
  let userCollection = this.db.collection<User>('/users', ref => {
    return ref.where('login', '==', login)
  });
  let user = userCollection.snapshotChanges().map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as User;
      const id = a.payload.doc.id;
      
      return { id, ...data };
    })
  });

  return user;
}
deleteUser(idDokumentu){
    this.userDocument = this.db.doc('/users/' + idDokumentu);
    this.userDocument.delete();
}
}

