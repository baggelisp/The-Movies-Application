import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageService } from './search-page.service';
import { SearchPageComponent } from './search-page.component';
import { SearchPageApi } from './search-page.api';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MovieDetailsModalModule } from '../movie-details-modal/movie-details-modal.module';


@NgModule({
  declarations: [
    SearchPageComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MovieDetailsModalModule
  ],
  providers: [
    SearchPageService,
    SearchPageApi
  ]
})
export class SearchPageModule { }
