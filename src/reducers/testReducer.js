import {
  GET_TESTS_SUCCESS,
  GET_TESTS_FAILURE,
  GET_TESTS,
} from '../constants/actionTypes';

const initialState = {
  loading: false,
  tests: [],
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
