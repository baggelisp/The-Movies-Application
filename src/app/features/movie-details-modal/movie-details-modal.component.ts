import { Component, OnInit } from '@angular/core';
import { MovieDetailsModalService } from './movie-details-modal.service';

@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss']
})
export class MovieDetailsModalComponent implements OnInit {

  constructor( public service: MovieDetailsModalService) { }

  ngOnInit(): void {

    this.service.movie$.subscribe(a => {
      console.log(a)
    })
  }

}
