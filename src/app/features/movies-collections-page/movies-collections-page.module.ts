import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesCollectionsPageRoutingModule } from './movies-collections-page-routing.module';
import { MoviesCollectionsPageComponent } from './movies-collections-page.component';
import { MoviesCollectionsPageService } from './movies-collections-page.service';
import { MoviesCollectionsPageApi } from './movies-collections-page.api';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MoviesCollectionsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesCollectionsPageRoutingModule
  ],
  providers: [
    MoviesCollectionsPageService,
    MoviesCollectionsPageApi
  ]
})
export class MoviesCollectionsPageModule { }
