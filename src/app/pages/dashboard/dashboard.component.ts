/* ******Developed by******
***Albeiro Vidal Rojas** */

import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {

  link1="https://www.pwc.com/co/es/pwc-times/cop26-union-materializacion.html";
  link2="https://www.pwc.com/co/es/pwc-times/negocios-familiares-esg.html";
  link3="https://www.pwc.com/co/es/pwc-times/beneficios-tributarios.html";

  image1="./assets/images/cards-colums/card-colum1.png";
  image2="./assets/images/cards-colums/card-colum2.png";
  image3="./assets/images/cards-colums/card-colum3.png";
  
  public parrafo1: string ="COP26, la cumbre de la unión y la materialización de las acciones para enfrentar el cambio climático";
  public parrafo2: string ="  Los negocios familiares tienen la oportunidad de liderar en los factores ESG";
  public parrafo3: string ="Beneficios tributarios establecidos en los Artículos 45, 46 y 47 de la Ley 2155 de septiembre 14 de 2021.";
  
  constructor() {
   
   }

  ngOnInit(): void {
  }

}
