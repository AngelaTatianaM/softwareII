import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { ResartarDirective } from './directives/resaltar.directive';
import { ConstarClicksDirective } from './directives/contarClicks.directive';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './Services/lugares.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CrearComponent } from './crear/crear.component';

const appRoutes: Routes = [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent}, 
  {path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'crear', component: CrearComponent}

];

export const firebaseConfig = {
  apiKey: "AIzaSyDQY1w7B0loNV6CdZ3JRNzWLCODIbRnHC4",
  authDomain: "sitiosturisticos-deb84.firebaseapp.com",
  databaseURL: "https://sitiosturisticos-deb84.firebaseio.com",
  storageBucket: "sitiosturisticos-deb84.appspot.com",
  messagingSenderId: "730567629344",
  appId: "1:730567629344:web:f421730c44af496bfaba45",
  measurementId: "G-YR691GBVJM"
};

@NgModule({
  declarations: [
    AppComponent,
    ResartarDirective,
    ConstarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
