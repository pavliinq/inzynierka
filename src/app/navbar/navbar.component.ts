import { Component, OnInit } from '@angular/core';
import { SlowaService } from '../slowa/shared/slowa.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sloServ:SlowaService) { }

  ngOnInit() {
  }

  dodajUsera(f:NgForm){
    this.sloServ.setAutor(f.value.user);

  }

}
