
// ******Developed by******
// ***Albeiro Vidal Rojas**

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NoFoundComponent } from './pages/404/no-found.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '', component:PagesComponent,
    children:[
      {path: 'dasboard', component: DashboardComponent},
      {path: '', redirectTo:'/dasboard', pathMatch:'full'},
    ]
  }, 

  {path: 'login', component: LoginComponent},  
  {path: '**', component: NoFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class AppRoutingModule { }
