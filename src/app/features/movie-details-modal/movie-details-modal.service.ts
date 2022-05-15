import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
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
    private api: MovieDetailsModalApi, private spinner: NgxSpinnerService) { 
      const state$ = store.select('movieDetailsReducer');
      this.movie$  = state$.pipe(select(state => state['movie']));
    }

  openDialog(movieId: number) {
    const dialogRef = this.dialog.open(MovieDetailsModalComponent);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
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
      this.store.dispatch({ type: `CLEAN_STATE`, payload: {}  }); 
    });
	}
}
