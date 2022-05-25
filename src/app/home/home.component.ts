import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public videos:any = []


  constructor(private restServicio:RestService) { }
  ngOnInit(): void {

    this.cargarData();
  }

  
  


  public cargarData(){
    this.restServicio.get("http://localhost:3000/video").subscribe(respuesta =>{
     this.videos = respuesta;
    }
    )

  }

}
