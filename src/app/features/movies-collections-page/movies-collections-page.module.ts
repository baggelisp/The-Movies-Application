import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesCollectionsPageRoutingModule } from './movies-collections-page-routing.module';
import { MoviesCollectionsPageService } from './movies-collections-page.service';
import { MoviesCollectionsPageApi } from './movies-collections-page.api';
import { SharedModule } from 'src/app/shared/shared.module';
import { CollectionsModalComponent } from './components/collections-modal/collections-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CollectionComponent } from './pages/collection/collection.component';
import { CollectionsListComponent } from './pages/collections-list/collections-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NewCollectionModalComponent } from './components/new-collection-modal/new-collection-modal.component';
import { CollectionService } from './pages/collection/collection.service';
import { CollectionApi } from './pages/collection/collection.api';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    CollectionsModalComponent,
    CollectionsListComponent,
    CollectionComponent,
    NewCollectionModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesCollectionsPageRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    MoviesCollectionsPageService,
    MoviesCollectionsPageApi,
    CollectionService,
    CollectionApi
  ]
})
export class MoviesCollectionsPageModule { }
