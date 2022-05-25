import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListViewComponent } from './list-view/list-view.component';
import { LoginComponent } from './login/login.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UploadComponent } from './upload/upload.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
{
  path: "", component: HomeComponent,
  canActivate: [VigilanteGuard]
},
{
  path: "video/:variable", component: PostDetailComponent
},
{
  path: 'list-videos', component:ListViewComponent,
},
{
  path: 'login', component:LoginComponent
},
{
  path: 'upload', component:UploadComponent,
  canActivate:[VigilanteGuard]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
