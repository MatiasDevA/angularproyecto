import { Component, OnInit } from '@angular/core';
import { ServicioFavoritoService } from '../servicio-favorito.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicioFavorito:ServicioFavoritoService) { }

  public listaDeVideos:Array<any> = []
  ngOnInit(): void {
    this.servicioFavorito.diparadorDeFavoritos.subscribe(data => {
      console.log("recibiendo data", data )
      this.listaDeVideos.push(data);
    })
  }

}
