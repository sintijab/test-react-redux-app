import axios from 'axios';
import {
  GET_TESTS,
  GET_TESTS_SUCCESS,
  GET_TESTS_FAILURE,
} from '../constants/actionTypes';

const getTestsSuccess = (tests = []) => ({
  type: GET_TESTS_SUCCESS,
  payload: tests,
});

const getTestsFailure = (error) => ({
  type: GET_TESTS_FAILURE,
  payload: {
    error,
  },
});

const getTestsStarted = () => ({
  type: GET_TESTS,
});

export const getTests = () => (dispatch) => {
  dispatch(getTestsStarted());

  axios
    .get('https://opentdb.com/api.php?amount=10')
    .then((response) => {
      if (response.data.results) {
        dispatch(getTestsSuccess(response.data.results));
      } else {
        dispatch(getTestsFailure());
      }
    })
    .catch((err) => {
      dispatch(getTestsFailure(err.message));
    });
};
