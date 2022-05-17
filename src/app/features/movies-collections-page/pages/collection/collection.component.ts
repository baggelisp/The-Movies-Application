import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionInt, MoviesCollectionsPageService } from '../../movies-collections-page.service';
import { CollectionService } from './collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collectionId: string = '';
  collection?: CollectionInt;

  constructor(private route: ActivatedRoute, private router: Router, 
    public service: MoviesCollectionsPageService,
    public collectionService: CollectionService) { }

  ngOnInit(): void {
    this.collectionId = this.route.snapshot.params['id'];
    if (!this.collectionId) this.goToAllCollections();
    this.collection = this.service.getCollection(this.collectionId);
    if (!this.collection.id) this.goToAllCollections();

    this.collectionService.getMoviesData(this.collection.movies);

    this.collectionService.movies$.subscribe(a => console.log(a))
  }

  goToAllCollections(){
    this.router.navigate(['/collections']);
  }

  deleteCollection(){
    this.service.deleteCollection(this.collection?.id ?? '');
    this.goToAllCollections();
  }



}
