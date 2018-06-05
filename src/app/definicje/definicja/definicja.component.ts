import { Component, OnInit, Input } from '@angular/core';
import { Definicja } from '../shared/definicja.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { DefinicjeService } from '../shared/definicje.service';
import { KontoService } from '../../konto/shared/konto.service';
import { User } from '../../konto/shared/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-definicja',
  templateUrl: './definicja.component.html',
  styleUrls: ['./definicja.component.css']
})

export class DefinicjaComponent implements OnInit {
  lajkii: number;
  dislajkii: number;
  strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  test: boolean = false;
  url: string[] = window.location.href.split('/');
  ktoreikony: string;

  user: User[];
  account_type: string;

  czyMod: boolean = false;



  @Input('autor') public autor: string;
  @Input('definicja') definicja: Definicja;

  constructor(private db: AngularFirestore, public definicjaServe: DefinicjeService, private userServe: KontoService) {
    this.userServe.checkUser(this.userServe.getCurUser()).subscribe(
      data => {
        this.user = data
        if (this.user.length == 0) {
        } else {
          this.account_type = this.user[0].account_type
        }



      }
    )
  }
  // edycja wpisow
  czyUpdate() {
    this.czyMod = !this.czyMod;
    // console.log(this.czyMod);
  }
  upDateDefinicje(f: NgForm) {
    this.definicja.definicja = f.value.edycja;
    this.definicjaServe.updateDefinicja(this.definicja, this.definicja.id, this.strona, this.url[4]);
  }




  ngOnInit() {
    this.lajki()
    this.przyciski()
    this.delete()
  }

  delete_def() {
    this.definicjaServe.deleteDefinicja(this.definicja.id, this.url[5], this.url[4])
  }


  przyciski() {
    while (this.test != true) {
      for (let lajki of this.definicja.likes) {
        if (lajki == this.autor) {
          this.ktoreikony = '1'
          this.test = true;
          break;
        }
      }
      for (let dislajki of this.definicja.dislikes) {
        if (dislajki == this.autor) {
          this.ktoreikony = '2'
          this.test = true;
          break;
        }

      }
      if ((this.ktoreikony != '1') && (this.ktoreikony != '2')) {
        this.ktoreikony = '3'
        this.test = true;
        break;
      }

    }

  }


  lajki() {

    this.lajkii = this.definicja.likes.length;
    this.dislajkii = this.definicja.dislikes.length;


    // console.log(this.definicja.sumlikes.valueOf())

  }
  dajLajka() {

    if (this.definicja.likes.indexOf(this.autor) == -1) {
      this.definicja.likes.push(this.autor);

      if (this.definicja.dislikes.indexOf(this.autor) == -1) {
        this.definicja.sumlikes = this.definicja.sumlikes.valueOf() + 1;
      } else {
        let index = this.definicja.dislikes.indexOf(this.autor);
        this.definicja.dislikes.splice(index, 1);
        this.definicja.sumlikes = this.definicja.sumlikes.valueOf() + 2;
      }

    }
    else {
      let index = this.definicja.likes.indexOf(this.autor);
      this.definicja.likes.splice(index, 1);
      this.definicja.sumlikes = this.definicja.sumlikes.valueOf() - 1;

    }
    this.definicjaServe.updateDefinicja(this.definicja, this.definicja.id, this.strona, this.url[4]);
  }

  dajDisLajka() {
    if (this.definicja.dislikes.indexOf(this.autor) == -1) {
      this.definicja.dislikes.push(this.autor);

      if (this.definicja.likes.indexOf(this.autor) == -1) {
        this.definicja.sumlikes = this.definicja.sumlikes.valueOf() - 1;
      } else {
        let index = this.definicja.likes.indexOf(this.autor);
        this.definicja.likes.splice(index, 1);
        this.definicja.sumlikes = this.definicja.sumlikes.valueOf() - 2;
      }


    }
    else {
      let index = this.definicja.dislikes.indexOf(this.autor);
      this.definicja.dislikes.splice(index, 1);
      this.definicja.sumlikes = this.definicja.sumlikes.valueOf() + 1;


    }
    this.definicjaServe.updateDefinicja(this.definicja, this.definicja.id, this.strona, this.url[4]);
  }
  delete() {
    if (this.definicja.sumlikes < -9) {

      this.definicjaServe.deleteDefinicja(this.definicja.id, this.url[5], this.url[4])
    }


  }
}
