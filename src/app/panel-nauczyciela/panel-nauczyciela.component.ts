import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { KursyService } from '../kursy/shared/kursy.service';
import { SlowaService } from '../slowa/shared/slowa.service';
import { Slowo } from '../slowa/shared/slowo.model';
import { KontoService } from './../konto/shared/konto.service'
import { DataSharingService } from '../data-sharing.service';
import { Router } from '@angular/router';
import { User } from '../konto/shared/user.model';

@Component({
  selector: 'app-panel-nauczyciela',
  templateUrl: './panel-nauczyciela.component.html',
  styleUrls: ['./panel-nauczyciela.component.css']
})
export class PanelNauczycielaComponent implements OnInit {
  prowadzacy: string;
  slowa: Slowo[];
  user: User[];
  account_type: string
  coursesList
  selectedCourse
  poczatkowailosc:number = 1
  isUserLoggedIn: boolean;
  constructor(private kursService: KursyService,
    public slowoServe: SlowaService, private userServe: KontoService,public dataSharingService: DataSharingService,private router: Router) {
      this.userServe.checkUser(this.userServe.getCurUser()).subscribe(
        data => {
          this.user = data
          if (this.user.length == 0) {
          } else {
            this.account_type = this.user[0].account_type
          }

        }
      )
      this.dataSharingService.isUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value;
        if (this.isUserLoggedIn===false){
          this.router.navigateByUrl('/')
        }
    
        });


  }

  getWords(course) {
    this.slowoServe.getSlowa(course).subscribe(data => {
      var cumulatedData = []

      data.forEach(word => {

        if (!word.teacherOff && word.dislikes.length >= this.poczatkowailosc)
          cumulatedData.push(word)
      })

      this.slowa = cumulatedData.sort((a: Slowo, b: Slowo) => {
        return +new Date(b.data_dod) - +new Date(a.data_dod);
      }
      );

    });
  }

  getCourses() {
    //TODO zamienic getKurs na inny serwis pobierajacy tylko kursy przypisane do danego usera

    this.kursService.getKurs().subscribe(res => this.coursesList = res)
  }
  ngOnInit() {
    this.prowadzacy = this.userServe.getCurUser()
    this.getCourses()

  }

  deleteWords() {
    this.slowa.forEach(word => {
      word.teacherOff = true
      this.slowoServe.updateSlowo(word, word.id, this.selectedCourse.id);
    })


  }



  setCourse(course) {
    this.selectedCourse = course
    this.getWords(course.id)
  }

  zmienilosc(event: any) {
    this.poczatkowailosc = event.target.value;
    // console.log(this.poczatkowailosc);
    // this.getWords(course.id)
    // this.getCourses();
    // this.getWords(this.selectedCourse)
  }




}