import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './pages/collection/collection.component';
import { CollectionsListComponent } from './pages/collections-list/collections-list.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsListComponent,
  },
  {
    path: 'list/:id',
    component: CollectionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesCollectionsPageRoutingModule { }
