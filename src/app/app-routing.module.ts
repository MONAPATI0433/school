import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'images',
    component:ImagesComponent
  },
  {
    path:'contactUs',
    component:ContactUsComponent
  },
  {
    path:'Blog',
    component:BlogComponent
  },

  {
    path:'login',
    component:LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
