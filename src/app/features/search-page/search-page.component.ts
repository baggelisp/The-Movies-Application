import { Component, OnInit } from '@angular/core';
import { MovieDetailsModalService } from '../movie-details-modal/movie-details-modal.service';
import { SearchPageService } from './search-page.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchValue: string = '';
  isSearchOpen = false;

  constructor(public service: SearchPageService, 
    public movieDetailModal: MovieDetailsModalService,
    private router: Router, private route: ActivatedRoute) {
      const openMovieQueryParam = this.route.snapshot.queryParamMap.get('openMovie');
      if (openMovieQueryParam) this.movieDetailModal.openDialog(parseInt(openMovieQueryParam));
     }

  ngOnInit(): void {
    this.service.getPopularMovies();
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
    const queryParams: Params = { openMovie: movieId };
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: queryParams, 
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
    this.movieDetailModal.openDialog(movieId)
  }

}
