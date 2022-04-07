import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-columns',
  templateUrl: './cards-columns.component.html',
  styleUrls: ['./cards-columns.component.css']
})
export class CardsColumnsComponent implements OnInit {
  
  @Input () srcimage: string ="";
  @Input () srclink: string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
