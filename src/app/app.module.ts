/* ******Developed by******
***Albeiro Vidal Rojas** */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NoFoundComponent } from './pages/404/no-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { PagesComponent } from './pages/pages.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsColumnsComponent } from './components/cards-columns/cards-columns.component';
import { SeccionInsightsHomeComponent } from './components/seccion-insights-home/seccion-insights-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoFoundComponent,
    DashboardComponent,    
    HeaderComponent,
    PagesComponent,
    CarouselComponent,
    CardsColumnsComponent,
    SeccionInsightsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
