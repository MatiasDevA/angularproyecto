import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public respuesta:any;
  public form:FormGroup;
  public comentarios:any = [];
  constructor(private router:ActivatedRoute, private restServicio:RestService, private formbuilder:FormBuilder) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe((paramMap:any) =>{
      const {params} = paramMap
      this.cargarData(params.variable);
    })

    this.form = this.formbuilder.group({
      textAreaCreado: ['']
    });
  }

  cargarData(id:string){
    this.restServicio.get(`http://localhost:3000/video/${id}`).subscribe(respuesta =>{
      this.respuesta = respuesta ;

    })
  }
  cargarComentarios(){
    this.restServicio.get("http://localhost:3000/comments").subscribe(respuesta => {
      this.comentarios = respuesta;
    })
  }

   enviarData(){
     this.restServicio.post("http://localhost:3000/comments",
     { text: this.form.value.textAreaCreado}).subscribe(respuest =>
     console.log("comentario enviado!!"));
     this.form.reset(0);
     this.cargarComentarios();
   }

}
