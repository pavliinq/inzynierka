import { Component, OnInit } from '@angular/core';
import { KontoService } from '../konto/shared/konto.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private userServe: KontoService) { }

  ngOnInit() {
    let autor=this.userServe.getCurUser()
    
  }

}
