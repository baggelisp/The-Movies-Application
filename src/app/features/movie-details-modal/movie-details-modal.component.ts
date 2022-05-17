import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionsModalComponent } from '../movies-collections-page/components/collections-modal/collections-modal.component';
import { MovieDetailsModalService } from './movie-details-modal.service';

@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss']
})
export class MovieDetailsModalComponent implements OnInit {

  constructor( public service: MovieDetailsModalService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  goToLink(url: string){
		window.open(url, '_blank');
	}

  addToFavorites(movieId: number){
    const dialogRef = this.dialog.open(CollectionsModalComponent,
      {
        data: {
          movieId: movieId
        },
        width: '600px',
      });
      // dialogRef.afterClosed().subscribe(result => {
      //   this.collections = this.service.getCollections();
      // });
  }
}
