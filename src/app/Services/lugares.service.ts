import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
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

  constructor( private afB: AngularFireDatabase) { 

  }

  public getLugares() {
    return this.lugares;
  }

  public buscarLugar(id) {
    return this.lugares.filter((lugar: any) => lugar.id === id )[0] || null;
  }

  public guardarLugar(lugar) {
    console.log(lugar);
    this.afB.database.ref('lugares/1').set(lugar);
  }
}
