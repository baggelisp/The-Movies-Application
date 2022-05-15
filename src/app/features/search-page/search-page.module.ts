import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageService } from './search-page.service';
import { SearchPageComponent } from './search-page.component';
import { SearchPageApi } from './search-page.api';


@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule
  ],
  providers: [
    SearchPageService,
    SearchPageApi
  ]
})
export class SearchPageModule { }
