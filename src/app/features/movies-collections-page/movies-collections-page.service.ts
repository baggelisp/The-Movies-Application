import { Injectable } from '@angular/core';
import { MoviesCollectionsPageApi } from './movies-collections-page.api';

export interface CollectionInt {
  id: string,
  name: string,
}

@Injectable()
export class MoviesCollectionsPageService {

  constructor(private api: MoviesCollectionsPageApi) { }

  addNewCollection(collectionName: string){
    return this.api.addNewCollection(collectionName);

  }

  deleteCollection(collectionId: string){
    return this.api.deleteCollection(collectionId);
  }

  getCollections(): CollectionInt[]{
    return this.api.getCollections();
  }

  getCollection(collectionId: string): CollectionInt{
    return this.api.getCollection(collectionId);
  }
}
