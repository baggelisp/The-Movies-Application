import { Injectable } from '@angular/core';
import { CollectionInt } from './movies-collections-page.service';

const ALL_COLLECTIONS_KEY = 'collections';

@Injectable()
export class MoviesCollectionsPageApi {

  constructor() { }

  addNewCollection(collectionName: string){
    const collections = this.getCollections();
    collections.push({
      "id": this.makeId(5),
      "name": collectionName,
      "movies": []
    });
    localStorage.setItem(ALL_COLLECTIONS_KEY, JSON.stringify(collections));
    return {
      id: this.makeId(5),
      name: collectionName,
    };

  }

  deleteCollection(collectionId: string){
    const collections = this.getCollections();
    const newCollections = collections.filter( coll => coll.id !== collectionId);
    localStorage.setItem(ALL_COLLECTIONS_KEY, JSON.stringify(newCollections));
    return collectionId;

  }

  getCollections(): CollectionInt[]{
    return JSON.parse(localStorage?.getItem(ALL_COLLECTIONS_KEY) || '[]');
  }

  getCollection(collectionId: string): CollectionInt{
    const collections = this.getCollections();
    const foundColl = collections.filter( coll => coll.id === collectionId)[0] || {};
    return foundColl;
  }

  updateCollection(collection: CollectionInt) {
    const collections = this.getCollections();
    const updatedCollections = collections.map(coll =>
      coll.id === collection.id
        ? { ...collection }
        : {...coll}
    );
    localStorage.setItem(ALL_COLLECTIONS_KEY, JSON.stringify(updatedCollections));
    return collection;
  }

  saveMovieToCollection(collectionId: string, movieId: string) {
    const collection = this.getCollection(collectionId);

    const newCollection = collection.movies.includes(movieId) 
    ? {...collection}
    : {...collection, movies: [...collection.movies, movieId]};
    this.updateCollection(newCollection);
  }


  // helpers
  makeId(length:number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
  }
}
