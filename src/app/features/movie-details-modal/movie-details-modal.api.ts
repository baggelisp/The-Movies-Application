import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class MovieDetailsModalApi {

  constructor(private http: HttpClient) { }

  getMovieDetails(id: number): Observable<MovieDetails> {
		return this.http.get<any>(`${environment.apiUrl}/3/movie/${id}?api_key=${environment.apiKey}`);
	}

  
}
