import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from "mapbox-gl";
import { environment } from 'src/environments/environment';
import { LugaresService } from '../Services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  title = 'Turismo Boyaca';


   mapa: Mapboxgl.Map;
   coordinates : any;
   lugares : any; 


  constructor(
    private lugaresS : LugaresService
    ) {

      this.lugares = lugaresS.getLugares();
  }
  ngOnInit(){

    Mapboxgl.accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
    container: 'mapa-box',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.0664687,4.688052], // longitud, latitud
    zoom: 17 // starting zoom
    });

    this.createMarker(-74.0664687,4.688052);
     
  
  }

  createMarker(lng: number, lat: number): void {
    const marker = new Mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([lng, lat])
    .addTo(this.mapa)

    marker.on('drag', () => {
      this.coordinates = marker.getLngLat()
    })
  }


}
