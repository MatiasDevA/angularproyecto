import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin:FormGroup;

  constructor(private formBuilder:FormBuilder, private restService:RestService, private cookieService:CookieService,private router:Router) { }
  ngOnInit(): void {

    this.formLogin = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required , Validators.minLength(8)]]
     // terms: ['', [Validators.required, Validators.requiredTrue]],
     // youtube: ['', [Validators.required, Validators.pattern("^(https?\\:\\/\\/)?(www\\.youtube\\.com|youtu\\.?be)\\/.+$")]]
    });
  }

  get Email(){
    return this.formLogin.get("email");
  }
  get Password(){
    return this.formLogin.get("password");
  }

  enviarDatos():any{
    this.restService.post(`http://localhost:3000/login`, this.formLogin.value).subscribe((res:any) => {
      console.log("login exitoso!!");

    this.cookieService.set('tokennuevo', "nuevo-valor", 4, '/');
    this.router.navigate(['/'])
    })
  }


}
