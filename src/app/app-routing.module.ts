import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './container/contact/contact.component';
import { HomeComponent } from './container/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  // {
  //   path:'',component:HomeComponent
  // },
  {
    path:'',component:UserAuthComponent

  },
 
  {
    //here i used :id as query parameter to send to the detail page ,so that detail pages knows for which
    // i have to show details
    path:'details/:id',component:DetailComponent
  },
  {
    path:'Dashboard',component:DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path:'details/:id',component:DetailComponent
      } ,
      {
        path:'contact',component:ContactComponent
      },
      {
        path:'login',component:UserAuthComponent
      }  
    ]
    
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
