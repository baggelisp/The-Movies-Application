import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewCollectionModalComponent } from '../../components/new-collection-modal/new-collection-modal.component';
import { CollectionInt, MoviesCollectionsPageService } from '../../movies-collections-page.service';

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.scss']
})
export class CollectionsListComponent implements OnInit {

  collections: CollectionInt[] = [];
  
  constructor(private router: Router,
    public dialog: MatDialog, public service: MoviesCollectionsPageService) { }

  ngOnInit(): void {
    this.collections = this.service.getCollections();
  }

  onAddNew(){
    const dialogRef = this.dialog.open(NewCollectionModalComponent,
    {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.collections = this.service.getCollections();
    });
  }

  openCollection(id: string){
    this.router.navigate(['/collections/list/' + id]);
  }

}
