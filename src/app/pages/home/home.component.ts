import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie, CarteleraResponse } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  public movies: Movie[] = []
  public moviesSlideshow: Movie[] = []
  @HostListener('window:scroll', ['$event'] )
  onScroll(){
   
    const pos = (document.documentElement.scrollTop || document.body.scrollTop ) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight );
    if( pos > max ){
      if( this.peliculasService.cargando ){return;}
      // Llamar servicio
      this.peliculasService.getCartelera().subscribe( movies => {
        this.movies.push(...movies );
      });  
    }
  }
  
  constructor( private peliculasService: PeliculasService){}
  ngOnInit(): void {
    this.peliculasService.getCartelera().subscribe( movies => {
      this.movies = movies;
      this.moviesSlideshow = movies;
    })
  }

  ngOnDestroy(){
     this.peliculasService.resetCarteleraPage();
  }

}
