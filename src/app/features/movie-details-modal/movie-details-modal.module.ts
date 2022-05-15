import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsModalComponent } from './movie-details-modal.component';
import { MovieDetailsModalService } from './movie-details-modal.service';
import { MovieDetailsModalApi } from './movie-details-modal.api';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MovieDetailsModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [
    MovieDetailsModalService,
    MovieDetailsModalApi
  ]
})
export class MovieDetailsModalModule { }
