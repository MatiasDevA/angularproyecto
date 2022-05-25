import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { ServicioFavoritoService } from './servicio-favorito.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListViewComponent } from './list-view/list-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { UppercasePipe } from './uppercase.pipe';
import { UploadComponent } from './upload/upload.component';
import { ImagenrotaDirective } from './imagenrota.directive';
import { FocusDirective } from './focus.directive';
import { LoginSegundoComponent } from './login/login-segundo/login-segundo.component';
import { FormRecicladorComponent } from './form-reciclador/form-reciclador.component';
import { RecordarioFormComponent } from './recordario-form/recordario-form.component';
import { HeaderTaskListComponent } from './recordario-form/header-task-list/header-task-list.component';
import { ButtonTaskListComponent } from './recordario-form/button-task-list/button-task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    PostDetailComponent,
    ListViewComponent,
    LoginComponent,
    UppercasePipe,
    UploadComponent,
    ImagenrotaDirective,
    FocusDirective,
    LoginSegundoComponent,
    FormRecicladorComponent,
    RecordarioFormComponent,
    HeaderTaskListComponent,
    ButtonTaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [ServicioFavoritoService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
