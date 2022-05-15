import { Component, OnInit } from '@angular/core';
import { SearchPageService } from './search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(public service: SearchPageService) { }

  ngOnInit(): void {
    this.service.getPopularMovies();
    this.service.movies$.subscribe (a => {
      console.log(a)
    })
  }

  onSearchChangeValue(value: string) {
    console.log(value)
  }
}
