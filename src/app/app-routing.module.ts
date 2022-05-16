import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './layout/main-section/main-section.component';

const routes: Routes = [
  {
    path: '',
    component: MainSectionComponent,
    children: [
      {
        path: '',
      loadChildren: () => import('./features/search-page/search-page.module').then(m => m.SearchPageModule)
      },
      {
        path: 'collections',
      loadChildren: () => import('./features/movies-collections-page/movies-collections-page.module').then(m => m.MoviesCollectionsPageModule)
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
