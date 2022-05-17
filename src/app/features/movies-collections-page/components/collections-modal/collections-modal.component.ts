import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoviesCollectionsPageService } from '../../movies-collections-page.service';

export interface DialogData {
  isNewCollection: boolean;
}

@Component({
  selector: 'app-collections-modal',
  templateUrl: './collections-modal.component.html',
  styleUrls: ['./collections-modal.component.scss']
})
export class CollectionsModalComponent implements OnInit {

  @Input() isNewCollection = false;

  newCollectionValue = '';

  constructor( public dialogRef: MatDialogRef<CollectionsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  public service: MoviesCollectionsPageService) { 
    this.isNewCollection = data.isNewCollection;
  }

  ngOnInit(): void {
  }

  onSumbit(){
    this.service.addNewCollection(this.newCollectionValue);
    this.dialogRef.close();
  }

}
