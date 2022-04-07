import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  images = [
    {title: 'imagePWC1', src: "./assets/images/carousel/1.png"},
    {title: 'imagePWC2', src: "./assets/images/carousel/2.png"},
    {title: 'imagePWC3', src: "./assets/images/carousel/3.png"},
    {title: 'imagePWC4', src: "./assets/images/carousel/4.png"},
    {title: 'imagePWC5', src: "./assets/images/carousel/5.png"},
    
  ];


  constructor(config: NgbCarouselConfig) {
    config.interval = 1800;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }

}
