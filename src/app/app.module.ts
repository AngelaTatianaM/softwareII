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

const appRoutes: Routes = [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent}, 
  {path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ResartarDirective,
    ConstarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
