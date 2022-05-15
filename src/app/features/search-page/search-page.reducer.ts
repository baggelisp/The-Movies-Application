import { Movie } from "src/app/models/interfaces";

interface initialStateInt {
  currentPage: number,
  totalPages: number,
  movies: Movie[],
}

const initialState: initialStateInt ={
  currentPage: 0,
  totalPages: 0,
  movies: [],
};

interface ActionWithPayload {
    payload?: any;
    type: string;
  }

export function searchMovieReducer(state = initialState, { type, payload }: ActionWithPayload) {

  switch (type) {
    case 'GET_MOVIES_SUCCESS':
      return {
        ...state,
        movies: [...payload.results],
        currentPage: payload.page,
        totalPages: payload.total_pages
      }
    default:
      return state;
  }

}