import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ForbiddenValidatorDirective } from './directives/forbidden-validator.directive';


@NgModule({
  declarations: [
    ForbiddenValidatorDirective
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MatIconModule,
    ForbiddenValidatorDirective
  ]
})
export class SharedModule { }
