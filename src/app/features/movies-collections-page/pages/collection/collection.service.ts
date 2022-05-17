import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { combineLatest, Observable } from 'rxjs';
import { Movie } from 'src/app/models/interfaces';
import { CollectionApi } from './collection.api';

@Injectable()
export class CollectionService {
  public readonly movies$: Observable<Movie[]>;

  constructor(private store: Store<any>, private api: CollectionApi,
    private spinner: NgxSpinnerService) {
      const state$ = store.select('moviesCollectionsReducer');
      this.movies$  = state$.pipe(select(state => state['movies']));

     }

  getMoviesData(movies: string[]) {
    this.spinner.show();
    const combineLatestObj = movies.reduce((initValue, currentVal) => ({ ...initValue, [currentVal]: this.api.getMovieDetails(currentVal)}), {}) 
    combineLatest(combineLatestObj).subscribe((data) => {
      this.spinner.hide();
      this.store.dispatch({ type: `GET_COLL_MOVIES_SUCCESS`, payload: [...Object.values(data)] }); 
    }, error => {
      this.spinner.hide();
      alert("There was an error getting movies. Please try again later.");
      this.store.dispatch({ type: `CLEAN_STATE`, payload: {}  }); 
    });
  }
}
