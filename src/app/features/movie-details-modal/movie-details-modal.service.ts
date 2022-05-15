import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieDetailsModalApi } from './movie-details-modal.api';
import { MovieDetailsModalComponent } from './movie-details-modal.component';

@Injectable()
export class MovieDetailsModalService {

  constructor(public dialog: MatDialog, private store: Store<any>, 
    private api: MovieDetailsModalApi, private spinner: NgxSpinnerService) { }

  openDialog(movieId: number) {
    const dialogRef = this.dialog.open(MovieDetailsModalComponent);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
