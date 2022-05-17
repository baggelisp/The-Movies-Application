import { Injectable } from '@angular/core';
import { CollectionInt } from './movies-collections-page.service';

const COLLECTIONS_KEY = 'collections';

@Injectable()
export class MoviesCollectionsPageApi {

  constructor() { }

  addNewCollection(collectionName: string){
    const collections = this.getCollections();
    collections.push({
      "id": this.makeId(5),
      "name": collectionName,
    });
    localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(collections));
    return {
      id: this.makeId(5),
      name: collectionName,
    };

  }

  deleteCollection(collectionId: string){
    const collections = this.getCollections();
    const newCollections = collections.filter( coll => coll.id !== collectionId);
    localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(newCollections));
    return collectionId;

  }

  getCollections(): CollectionInt[]{
    return JSON.parse(localStorage?.getItem(COLLECTIONS_KEY) || '[]');
  }

  getCollection(collectionId: string): CollectionInt{
    const collections = this.getCollections();
    const foundColl = collections.filter( coll => coll.id === collectionId)[0] || {id: '', name: ''};
    return foundColl;

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
