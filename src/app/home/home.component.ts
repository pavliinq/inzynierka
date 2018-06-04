import { Component, OnInit } from '@angular/core';
import { KontoService } from '../konto/shared/konto.service'
import {DataSharingService} from '../data-sharing.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserLoggedIn: boolean;
  constructor( private userServe: KontoService, public dataSharingService: DataSharingService ) {   
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
    this.isUserLoggedIn = value;

    });}

  ngOnInit() {
    let autor=this.userServe.getCurUser()
    
  }

}
