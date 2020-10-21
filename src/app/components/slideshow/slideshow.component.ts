import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import { Swiper } from 'swiper';
 
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  public mySwiper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      // direction: 'vertical',
      loop: true
    });

  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }
  onSlidePrev(){
    this.mySwiper.slidePrev();
  }


  ngOnInit(): void {
    // console.log(this.movies);
  }

}
