import { Component, EventEmitter, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MovieDetailsModalService } from '../movie-details-modal/movie-details-modal.service';
import { SearchPageService } from './search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchValue: string = '';
  isSearchOpen = false;

  constructor(public service: SearchPageService, public movieDetailModal: MovieDetailsModalService) { }

  ngOnInit(): void {
    this.service.getPopularMovies();
    // this.service.movies$.subscribe (a => {
    //   console.log(a)
    // })
  }

  onSearchChangeValue(value: string) {
    this.isSearchOpen=true;
    this.searchValue = value;
    this.service.searchMovie(this.searchValue);
  }

  onPageChange(event:any) {
    this.isSearchOpen ?
    this.service.searchMovie(this.searchValue, event.pageIndex + 1)
    :
    this.service.getPopularMovies(event.pageIndex + 1);
  }

  onClickCard(movieId: number){
    this.movieDetailModal.openDialog(movieId)
  }
}
