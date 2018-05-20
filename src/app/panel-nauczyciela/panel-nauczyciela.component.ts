import { Component, OnInit } from '@angular/core';
import { KursyService } from '../kursy/shared/kursy.service';
import { SlowaService } from '../slowa/shared/slowa.service';
import { Slowo } from '../slowa/shared/slowo.model';

@Component({
  selector: 'app-panel-nauczyciela',
  templateUrl: './panel-nauczyciela.component.html',
  styleUrls: ['./panel-nauczyciela.component.css']
})
export class PanelNauczycielaComponent implements OnInit {
  slowa: Slowo[];
  coursesList 
  selectedCourse
   constructor(private kursService :  KursyService,
    public slowoServe: SlowaService) {
       


   }

   getWords(course)
   {
    this.slowoServe.getSlowa(course).subscribe(data => {
      var cumulatedData = []
      console.log(data)
      data.forEach(word => 
      {
        if(!word.teacherOff && word.sumaLike >= 2 )
          cumulatedData.push(word)
      })
      this.slowa = cumulatedData.sort((a: Slowo, b: Slowo) => {
          return  +new Date(b.data_dod) - +new Date(a.data_dod) ;
      } 
    );

  });
   }

   getCourses()
   {
        //TODO zamienic getKurs na inny serwis pobierajacy tylko kursy przypisane do danego usera
    
    this.kursService.getKurs().subscribe(res => this.coursesList = res)
   }
  ngOnInit() {
    this. getCourses()

  } 

  deleteWords()
  {
     this.slowa.forEach(word => {
      word.teacherOff = true
      this.slowoServe.updateSlowo(word, word.id, this.selectedCourse.id );
     })
  }



  setCourse(course)
  {
    this.selectedCourse= course
    this.getWords(course.id)
  }




}