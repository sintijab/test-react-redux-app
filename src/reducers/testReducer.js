import {
  GET_TESTS_SUCCESS,
  GET_TESTS_FAILURE,
  GET_TESTS,
} from '../constants/actionTypes';

const initialState = {
  loading: false,
  results: [],
  error: null,
};

export default function testsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TESTS:
      return {
        ...state,
        loading: true,
      };
    case GET_TESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        results: action.payload,
        iterationsScore: action.payload.length,
      };
    case GET_TESTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
