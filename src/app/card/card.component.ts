import { Component, Input, OnInit } from '@angular/core';
import { ServicioFavoritoService } from '../servicio-favorito.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any;


  constructor(private servicioFavorito:ServicioFavoritoService) { }

  ngOnInit(): void {

    console.log("llamando componente", this.dataEntrante);
  }

  agregarFavorito(){
   console.log(this.dataEntrante);
    this.servicioFavorito.diparadorDeFavoritos.emit({
      data:this.dataEntrante
    })

  }

}

