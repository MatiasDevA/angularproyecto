import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-segundo',
  templateUrl: './login-segundo.component.html',
  styleUrls: ['./login-segundo.component.css']
})
export class LoginSegundoComponent implements OnInit {
  public formLogin:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.formLogin = this.formBuilder.group({
      name : ['',Validators.required],
      telephone : ['',[Validators.required,Validators.minLength(8)]],
      email : ['', [Validators.required,Validators.email]],
      message: ['', Validators.required]
    })

  }

  enviarDatos():any{
    console.log("message");
  }

  get Name(){
      return this.formLogin.get("name");
  }
  get Telephone(){
    return this.formLogin.get("telephone");
}
  get Email(){
  return this.formLogin.get("email");
}
  get Message(){
  return this.formLogin.get("message");
}

  }


