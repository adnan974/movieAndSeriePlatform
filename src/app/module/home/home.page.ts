import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public pageTitle: string = "Accueil";

  constructor(private router: Router, private movieService: MovieService) { }

  public mostPopularMovies: Array<Movie> = [
    {
      title:"Fast and Furious 8",
      moviePictureUrl:"../../../assets/images/305158.webp",
      description:"Des rivages de Cuba au rues de New York en passant par les plaines gelées de la mer arctique de Barrents, notre équipe va sillonner le globe pour tenter d'..."

    }
  ]

  ngOnInit() {
    this.movieService.getMovieById('').subscribe((movies) => {
      console.log(movies)
    })
  }


}
