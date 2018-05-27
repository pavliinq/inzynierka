import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-kursy',
  templateUrl: './kursy.component.html',
  styleUrls: ['./kursy.component.css']
})
export class KursyComponent implements OnInit {
  user;
  authService;

  constructor(afAuth: AngularFireAuth, authService: AuthService) {
    afAuth.authState.subscribe(user => this.user = user);
    this.authService = authService;
  }

  ngOnInit() {
  }

}
