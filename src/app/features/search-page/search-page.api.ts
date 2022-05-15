import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesResponse } from 'src/app/models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class SearchPageApi {

	constructor(private http: HttpClient) {
	}

	getPopularMovies(): Observable<MoviesResponse> {
		return this.http.get<MoviesResponse>(`${environment.apiUrl}/3/movie/popular?api_key=${environment.apiKey}`);
	}

	searchMovie(query: string): Observable<MoviesResponse> {
		return this.http.get<any>(`${environment.apiUrl}/3/movie/search?api_key=${environment.apiKey}&query=${query}`)
	}

  
}
