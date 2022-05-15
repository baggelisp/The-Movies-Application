import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/interfaces';
import { SearchPageApi } from './search-page.api';

@Injectable()
export class SearchPageService {
  public readonly movies$: Observable<Movie[]>;
  public readonly currentPage$: Observable<number>;
  public readonly totalPages$: Observable<number>;

  
  constructor(private store: Store<any>, private api: SearchPageApi, private spinner: NgxSpinnerService) { 
    const state$ = store.select('searchMovieReducer');
    this.movies$  = state$.pipe(select(state => state['movies']));
    this.currentPage$  = state$.pipe(select(state => state['currentPage']));
    this.totalPages$  = state$.pipe(select(state => state['totalPages']));
  }

  getPopularMovies() {
    this.spinner.show();
    this.api.getPopularMovies().subscribe( response => {
      this.spinner.hide();
      this.store.dispatch({ type: `GET_MOVIES_SUCCESS`, payload: {...response}  }); 
    }, error => {
      this.spinner.hide();
      alert("There was an error getting movies. Please try again later.")
    });
	}

	searchMovie(query: string){
    this.api.searchMovie(query).subscribe( a => {
      console.log(a)
    });	
  }
}
