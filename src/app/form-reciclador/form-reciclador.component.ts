import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reciclador',
  templateUrl: './form-reciclador.component.html',
  styleUrls: ['./form-reciclador.component.css']
})
export class FormRecicladorComponent implements OnInit {

  public formRecicler:FormGroup;

  constructor(private FormBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.formRecicler = this.FormBuilder.group({
      name:['', [Validators.required,Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      image: ['', Validators.required],
      rol: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  get Name(){
    return this.formRecicler.get("name");
  }
  get Email(){
    return this.formRecicler.get("email");
  }
  get Image(){
    return this.formRecicler.get("image");
  }
  get Rol(){
    return this.formRecicler.get("rol");
  }
  get Description(){
    return this.formRecicler.get("description");
  }

  sendMessage(){
   return console.log("mensaje enviado de prueba!")
  }



}
