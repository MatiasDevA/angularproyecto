import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
export interface PeriodicElement {
  title: string;
  imagen: string;
  views: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {imagen: "", title: 'Hydrogen', views: 1.0079},
  {imagen: "", title: 'Helium', views: 4.0026},
  {imagen: "", title: 'Lithium', views: 6.941},
  {imagen: "", title: 'Beryllium', views: 9.0122},
  {imagen: "", title: 'Boron', views: 10.811},
  {imagen: "", title: 'Carbon', views: 12.0107},
  {imagen: "", title: 'Nitrogen', views: 14.0067},
  {imagen: "", title: 'Oxygen', views: 15.9994},
  {imagen: "", title: 'Fluorine', views: 18.9984},
  {imagen: "", title: 'Neon', views: 20.1797},
];

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})

export class ListViewComponent implements OnInit {
  displayedColumns: string[] = ['imagen', 'title', 'views'];
  dataSource = ELEMENT_DATA;
  constructor(private restService:RestService) { 
    
  }

  ngOnInit() {
   this.cargarData()
  }

  cargarData(): void{
    this.restService.get(`http://localhost:3000/video`).subscribe((data:any)=>{
      this.dataSource = data
    })
  }

  
  }



