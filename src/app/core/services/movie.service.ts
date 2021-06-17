import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private readonly http:HttpClient) { }

  getTopRatedMovies(){

  }

  getMovieById(id:string):Observable<any>{
    return this.http.get('https://imdb8.p.rapidapi.com/title/find?rapidapi-key=37685449c1msh8bd78f6251c1bbdp1dbcb9jsnf26f55521cab')
     

  }


}
