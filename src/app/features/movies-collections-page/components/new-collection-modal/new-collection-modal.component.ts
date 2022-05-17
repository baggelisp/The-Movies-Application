import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollectionInt, MoviesCollectionsPageService } from '../../movies-collections-page.service';
import { DialogData } from '../collections-modal/collections-modal.component';

@Component({
  selector: 'app-new-collection-modal',
  templateUrl: './new-collection-modal.component.html',
  styleUrls: ['./new-collection-modal.component.scss']
})
export class NewCollectionModalComponent implements OnInit {

  collections: CollectionInt[] = [];

  newCollectionValue = '';

  constructor( public dialogRef: MatDialogRef<NewCollectionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  public service: MoviesCollectionsPageService) { 
  }

  ngOnInit(): void {
  }

  onSumbit(){
    if (!this.newCollectionValue || this.newCollectionValue.length < 4) return;
    this.service.addNewCollection(this.newCollectionValue);
    this.dialogRef.close();
  }

}
