
interface initialStateInt {
  // movie: MovieDetails | any,
}

const initialState: initialStateInt ={
};

interface ActionWithPayload {
    payload?: any;
    type: string;
  }

export function moviesCollectionsReducer(state = initialState, { type, payload }: ActionWithPayload) {

  switch (type) {
    case 'GET_MOVIE_SUCCESS':
      return {
        ...state,
        movie: {...payload},
      }
    case 'CLEAN_STATE':
      return {
        ...initialState
      }
    default:
      return state;
  }

}