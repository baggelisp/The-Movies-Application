import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { MovieDetails } from 'src/app/models/interfaces';
import { MovieDetailsModalApi } from './movie-details-modal.api';
import { MovieDetailsModalComponent } from './movie-details-modal.component';

@Injectable()
export class MovieDetailsModalService {
  public readonly movie$: Observable<MovieDetails>;

  constructor(public dialog: MatDialog, private store: Store<any>, 
    private api: MovieDetailsModalApi, private spinner: NgxSpinnerService,
    private router: Router, private route: ActivatedRoute) { 
      const state$ = store.select('movieDetailsReducer');
      this.movie$  = state$.pipe(select(state => state['movie']));
    }

  openDialog(movieId: number) {
    const dialogRef = this.dialog.open(MovieDetailsModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      // remove query param variable
      const queryParams: Params = { openMovie: null };
      this.router.navigate(
        [], 
        {
          relativeTo: this.route,
          queryParams: queryParams, 
          queryParamsHandling: 'merge', // remove to replace all query params by provided
        });
    });
    this.getMovie(movieId);
  }

  getMovie(movieId: number) {
    this.spinner.show();
    this.api.getMovieDetails(movieId).subscribe( response => {
      this.spinner.hide();
      this.store.dispatch({ type: `GET_MOVIE_SUCCESS`, payload: {...response}  }); 
    }, error => {
      this.spinner.hide();
      alert("There was an error getting movies. Please try again later.");
      this.store.dispatch({ type: `MOVIE_CLEAN_STATE`, payload: {}  }); 
    });
	}
}
