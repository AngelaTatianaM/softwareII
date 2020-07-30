import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from "mapbox-gl";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  title = 'platzisquare';
  lugares: any = [

      { id: 1,
        plan: 'gratuito',
        cercania: 1, 
        distancia: 10, 
        active: false, 
        nombre: 'La Laguna de Tota'
      },
      { id: 2,
        plan: 'pagado',
        cercania: 1, 
        distancia: 10, 
        active: true, 
        nombre: 'Puente de Boyacá'
      },
      { id: 3,
        plan: 'gratuito',
        cercania: 2, 
        distancia: 10, 
        active: true, 
        nombre: 'Pantano de Vargas'
      },
      { id: 4,
        plan: 'pagado',
        cercania: 1, 
        distancia: 10, 
        active: false, 
        nombre: 'Casa Terracota' 
      },
      { id: 5,
        plan: 'pagado',
        cercania: 3, 
        distancia: 10, 
        active: true, 
        nombre: 'Sierra Nevada del Cocuy'
      },
      { id: 6,
        plan: 'gratuito',
        cercania: 2, 
        distancia: 10, 
        active: false, 
        nombre: 'Macanal y el turismo de aventura'
      },
      { id: 7,
        plan: 'pagado',
        cercania: 1, 
        distancia: 10, 
        active: true, 
        nombre: 'Los senderos de Tenza y la emisora de Sutatenza'
      },
      { id: 8,
        plan: 'gratuito',
        cercania: 3, 
        distancia: 10, 
        active: true, 
        nombre: 'Guateque, artesanías, gastronomía y esmeraldas'
      }
  ]

   mapa: Mapboxgl.Map;
   coordinates : any;


  constructor() {

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
