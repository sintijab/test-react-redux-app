import {
  GET_FINAL_RESULT,
  GET_RESULTS,
} from '../constants/actionTypes';

const initialState = {
  loading: false,
  finalScore: 0,
  iterationsScore: 0,
  error: null,
};

export default function scoreReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESULTS:
      return {
        ...state,
        loading: false,
        error: null,
        finalScore: action.scores.finalScore,
        iterationsScore: action.scores.iterationsScore,
      };
    case GET_FINAL_RESULT:
      return {
        ...state,
        loading: false,
        error: null,
        finalScore: action.finalScore,
      };
    default:
      return state;
  }
}
