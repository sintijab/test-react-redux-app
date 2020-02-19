import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTests } from '../actions';
import { Questions } from './Questions';
import styles from '../styles/main.scss';

class TestBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedTests: [],
    };

    this.setTests = this.setTests.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    const { props } = this;
    props.getTests();
  }

  componentDidUpdate() {
    const { tests } = this.props;
    const { loadedTests } = this.state;
    if (tests && !loadedTests.length) {
      this.setTests(tests);
    }
  }

  setTests(testResults) {
    this.setState({ loadedTests: testResults });
  }

  getQuestions() {
    const { loadedTests } = this.state;
    return loadedTests.map((test, i) => {
      /* eslint-disable camelcase */
      const {
        question,
        correct_answer,
        incorrect_answers = [],
      } = test;
      /* eslint-disable prefer-const */
      let options = incorrect_answers;
      /* mix correct answer into shuffle of incorrect answers */
      const optionsLength = incorrect_answers.length;
      const randomIndex = Math.floor(Math.random()
        * Math.floor(optionsLength));
      options[optionsLength] = options[randomIndex];
      options[randomIndex] = correct_answer;
      const index = `${i}-q`;
      return (
        <Questions
          key={index}
          title={question}
          answer={correct_answer}
          options={options}
        />
      );
    });
  }

  render() {
    const { loadedTests } = this.state;
    if (loadedTests.length) {
      const results = this.getQuestions();
      return (
        <div className={styles.board}>
          {results}
        </div>
      );
    }
    return <div />;
  }
}

TestBoard.propTypes = {
  getTests: PropTypes.func,
  tests: PropTypes.array,
};

TestBoard.defaultProps = {
  getTests: () => {},
  tests: [],
};

const mapStateToProps = (state) => ({
  tests: state.tests.results,
  error: state.error,
});

export default connect(
  mapStateToProps,
  { getTests },
)(TestBoard);
