import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionsModalComponent } from '../../components/collections-modal/collections-modal.component';
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
    console.log(this.collections)
    
  }

  onAddNew(){
    const dialogRef = this.dialog.open(CollectionsModalComponent,
    {
      data: {
        isNewCollection: true,
      },
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
