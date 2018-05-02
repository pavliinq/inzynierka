import { SlowaService } from './slowa/shared/slowa.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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



@NgModule({
  declarations: [
    AppComponent,
    SlowoComponent,
    SlowaListaComponent,
    DefinicjaComponent,
    DefinicjeListaComponent,
    FormDodajSlowoComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [SlowaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
