import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesCollectionsPageComponent } from './movies-collections-page.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesCollectionsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesCollectionsPageRoutingModule { }
