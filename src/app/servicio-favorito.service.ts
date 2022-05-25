import { Injectable, Output ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFavoritoService {

  @Output() diparadorDeFavoritos: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
