import { ActionReducerMap } from '@ngrx/store';
import { movieDetailsReducer } from '../features/movie-details-modal/movie-details-modal.reducer';
import { moviesCollectionsReducer } from '../features/movies-collections-page/movies-collections-page.reducer';
import { searchMovieReducer } from '../features/search-page/search-page.reducer';

export const reducers: ActionReducerMap<any> = {
    searchMovieReducer,
    movieDetailsReducer,
    moviesCollectionsReducer
}