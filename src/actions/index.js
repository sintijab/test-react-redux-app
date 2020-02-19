import axios from 'axios';
import {
  GET_TESTS,
  GET_TESTS_SUCCESS,
  GET_TESTS_FAILURE,
  GET_RESULTS,
  GET_FINAL_RESULT,
} from '../constants/actionTypes';

const getResults = (finalResult, iterationsScore) => ({
  type: GET_RESULTS,
  scores: {
    iterationsScore: iterationsScore - 1,
    finalScore: finalResult,
  },
});

const openInNewTab = (url) => {
  window.open(url, '_blank');
};

const getFinalResults = (finalResult) => ({
  type: GET_FINAL_RESULT,
  finalScore: finalResult,
});

export const addScoreToResults = (finalResult, iterationsScore) => (dispatch) => {
  dispatch(getResults(finalResult, iterationsScore));
  if (iterationsScore === 1) {
    localStorage.setItem('finalTestsResult', finalResult);
    dispatch(getFinalResults(finalResult));
    openInNewTab(window.location.href);
  }
};

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
        localStorage.setItem('totalTestsAmount', response.data.results.length);
        dispatch(getTestsSuccess(response.data.results));
      } else {
        dispatch(getTestsFailure());
      }
    })
    .catch((err) => {
      dispatch(getTestsFailure(err.message));
    });
};
