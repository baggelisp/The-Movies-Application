import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollectionInt, MoviesCollectionsPageService } from '../../movies-collections-page.service';
import { NewCollectionModalComponent } from '../new-collection-modal/new-collection-modal.component';

export interface DialogData {
  movieId: string;
}

@Component({
  selector: 'app-collections-modal',
  templateUrl: './collections-modal.component.html',
  styleUrls: ['./collections-modal.component.scss']
})
export class CollectionsModalComponent implements OnInit {

  collections: CollectionInt[] = [];
  movieId: string = '';

  newCollectionValue = '';

  constructor( public dialogRef: MatDialogRef<CollectionsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog,
  public service: MoviesCollectionsPageService) { 
    this.movieId = this.data.movieId
  }

  ngOnInit(): void {
    this.collections = this.service.getCollections();
  }

  onSelectCollection(collectionId: string) {
    this.service.saveMovieToCollection(collectionId, this.movieId);
    this.dialogRef.close();
  }

  addNewCollection(){
    const dialogRef = this.dialog.open(NewCollectionModalComponent,
    {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.collections = this.service.getCollections();
    });
  }
}
