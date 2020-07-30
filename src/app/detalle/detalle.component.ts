import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  lugares: any = [

    { id: 1,
      descripcion: 'Esta es la descripcion del lugar seleccionado todos tienen el mismo por el momento bueno?',
      plan: 'gratuito',
      cercania: 1, 
      distancia: 10, 
      active: false, 
      nombre: 'La Laguna de Tota'
    },
    { id: 2,
      descripcion: 'Esta es la descripcion del lugar seleccionado todos tienen el mismo por el momento bueno?',
      plan: 'pagado',
      cercania: 1, 
      distancia: 23, 
      active: true, 
      nombre: 'Puente de Boyacá'
    },
    { id: 3,
      descripcion: 'Esta es la descripcion del lugar seleccionado todos tienen el mismo por el momento bueno?',
      plan: 'gratuito',
      cercania: 2, 
      distancia: 76, 
      active: true, 
      nombre: 'Pantano de Vargas'
    },
    { id: 4,
      descripcion: 'Esta es la descripcion del lugar seleccionado todos tienen el mismo por el momento bueno?',
      plan: 'pagado',
      cercania: 1, 
      distancia: 112, 
      active: false, 
      nombre: 'Casa Terracota' 
    },
    { id: 5,
      descripcion: 'Esta es la descripcion del lugar seleccionado todos tienen el mismo por el momento bueno?',
      plan: 'pagado',
      cercania: 3, 
      distancia: 30, 
      active: true, 
      nombre: 'Sierra Nevada del Cocuy'
    },
    { id: 6,
      descripcion: 'Esta es la descripcion del lugar seleccionado todos tienen el mismo por el momento bueno?',
      plan: 'gratuito',
      cercania: 2, 
      distancia: 80, 
      active: false, 
      nombre: 'Macanal y el turismo de aventura'
    },
    { id: 7,
      descripcion: 'Esta es la descripcion del lugar seleccionado todos tienen el mismo por el momento bueno?',
      plan: 'pagado',
      cercania: 1, 
      distancia: 90, 
      active: true, 
      nombre: 'Los senderos de Tenza y la emisora de Sutatenza'
    },
    { id: 8,
      descripcion: 'Esta es la descripcion del lugar seleccionado todos tienen el mismo por el momento bueno?',
      plan: 'gratuito',
      cercania: 3, 
      distancia: 20, 
      active: true, 
      nombre: 'Guateque, artesanías, gastronomía y esmeraldas'
    }
]

id: number = null;  
lugar : any = {}; 

  constructor(private route: ActivatedRoute) { 

   // console.log('Este es el numero del lugar que elegi: ' + route.snapshot.params['id'])
   this.id = +this.route.snapshot.params['id'];
    //console.log(this.buscarLugar());
    this.lugar = this.buscarLugar(); 
  }

  buscarLugar() {
    return this.lugares.filter((lugar: any) => lugar.id === this.id )[0] || null;
  }

}
