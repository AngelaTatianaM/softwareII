import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../Services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

id: number = null;  
lugar : any = {}; 

  constructor(
    private route: ActivatedRoute, 
    private lugares: LugaresService) { 


   this.id = +this.route.snapshot.params['id'];

    this.lugar = this.lugares.buscarLugar(this.id);
  }



}
