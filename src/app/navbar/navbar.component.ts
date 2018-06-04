import { Component, OnInit } from '@angular/core';
import { SlowaService } from '../slowa/shared/slowa.service';
import { NgForm } from '@angular/forms';
import { KontoService } from '../konto/shared/konto.service'
import {DataSharingService} from '../data-sharing.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn: boolean;
  constructor(private sloServ:SlowaService, private userServe: KontoService,private dataSharingService: DataSharingService) {

    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  });
   }

  ngOnInit() {
    // let autor=this.userServe.getCurUser()
    // console.log('gasg')
    // console.log(autor)
    
  }
  

  dodajUsera(f:NgForm){
    this.sloServ.setAutor(f.value.user);

  }
  wyloguj(){
        this.dataSharingService.isUserLoggedIn.next(false);
        this.userServe.setCurUser('')
        
  }

}
