import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../Services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  lugar : any = {}; 

  constructor( 
    private lugaresSer : LugaresService
  ) { }

  ngOnInit(): void {
  }

  guardarLugar() {
    console.log(this.lugar)
    this.lugaresSer.guardarLugar(this.lugar);
  }

}
