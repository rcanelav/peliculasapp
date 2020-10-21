import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import { RatingModule } from 'ng-starrating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: Movie[];
  
  
  constructor( private router: Router) { }

  ngOnInit(): void {

   console.log(this.movies);
  }

  onMovieClick( movie: Movie ){
      this.router.navigate(['/pelicula', movie.id]);
  }

}
