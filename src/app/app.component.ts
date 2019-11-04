import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { LoadimageService } from './loadimage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadImage: any[];
  title = 'Carousel';
  constructor(public image: LoadimageService){}
  ngOnInit() {
    this.image.getImages().subscribe((data:any) =>{
      this.loadImage = data;
    });
 }

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 30
  };
}
