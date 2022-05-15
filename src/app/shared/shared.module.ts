import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ForbiddenValidatorDirective } from './directives/forbidden-validator.directive';
import { MovieCardComponent } from './components/movie-card/movie-card.component';


@NgModule({
  declarations: [
    ForbiddenValidatorDirective,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MatIconModule,
    ForbiddenValidatorDirective,
    MovieCardComponent
  ]
})
export class SharedModule { }
