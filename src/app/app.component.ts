import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  public cards:any = []

  constructor(private restServicio:RestService) { }
  ngOnInit(): void {
    
    this.cargarData();
  }

  public cargarData(){
    this.restServicio.get("http://localhost:3000/video").subscribe(respuesta =>{
     this.cards = respuesta;
    }
    )

  }

}
