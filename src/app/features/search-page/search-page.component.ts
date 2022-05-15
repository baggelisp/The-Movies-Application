import { Component, EventEmitter, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SearchPageService } from './search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchValue: string = '';
  isSearchOpen = false;

  constructor(public service: SearchPageService) { }

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
}
