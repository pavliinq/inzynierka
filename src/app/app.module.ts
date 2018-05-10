import { SlowaService } from './slowa/shared/slowa.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FirebaseApp } from '@firebase/app-types';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export const firebaseConfig = environment.firebaseConfig;
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SlowoComponent } from './slowa/slowo/slowo.component';
import { SlowaListaComponent } from './slowa/slowa-lista/slowa-lista.component';
import { DefinicjaComponent } from './definicje/definicja/definicja.component';
import { DefinicjeListaComponent } from './definicje/definicje-lista/definicje-lista.component';
import { FormDodajSlowoComponent } from './slowa/form-dodaj-slowo/form-dodaj-slowo.component';
import { FormDodajDefinicjeComponent } from './definicje/form-dodaj-definicje/form-dodaj-definicje.component';
import { DefinicjeService } from './definicje/shared/definicje.service';
import { KeysPipePipe } from './definicje/shared/keys-pipe.pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RankingListaComponent } from './ranking/ranking-lista/ranking-lista.component';
import { RankingService } from './ranking/shared/ranking.service';
import { KursyComponent } from './kursy/kursy.component';
import { FormDodajKursComponent } from './kursy/form-dodaj-kurs/form-dodaj-kurs.component';
import { KursyListaComponent } from './kursy/kursy-lista/kursy-lista.component';
import { KursComponent } from './kursy/kurs/kurs.component';
import { KursyService } from './kursy/shared/kursy.service';



@NgModule({
  declarations: [
    AppComponent,
    SlowoComponent,
    SlowaListaComponent,
    DefinicjaComponent,
    DefinicjeListaComponent,
    FormDodajSlowoComponent,
    FormDodajDefinicjeComponent,
    KeysPipePipe,
    NavbarComponent,
    HomeComponent,
    RankingListaComponent,
    KursyComponent,
    FormDodajKursComponent,
    KursyListaComponent,
    KursComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent},
      {path:'kursy/:kurs_id',component: FormDodajSlowoComponent},
      {path:'kursy',component: KursyComponent},
      {path:'kursy/:kurs_id/:slowo_id',component: FormDodajDefinicjeComponent},
      {path:'formularz',component: FormDodajKursComponent},
    
  ]),
  Ng2OrderModule
  ],
  providers: [SlowaService, DefinicjeService, RankingService,KursyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
