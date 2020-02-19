import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTests } from '../actions';
import Question from './Question';
import styles from '../styles/main.scss';

class TestBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedTests: [],
      finalResult: 0,
      totalAmount: 0,
    };

    this.setTests = this.setTests.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    const { props } = this;
    const finalTestsResult = localStorage.getItem('finalTestsResult');
    const totalTestsAmount = localStorage.getItem('totalTestsAmount');
    if (finalTestsResult && totalTestsAmount) {
      this.setState({
        finalResult: finalTestsResult,
        totalAmount: totalTestsAmount,
      });
      localStorage.removeItem('finalTestsResult');
      localStorage.removeItem('totalTestsAmount');
    } else {
      props.getTests();
    }
  }

  componentDidUpdate() {
    const { tests } = this.props;
    const { loadedTests } = this.state;
    if (tests.length && !loadedTests.length) {
      this.setTests(tests);
    }
  }

  setTests(testResults) {
    this.setState({ loadedTests: testResults });
  }

  getQuestions() {
    const { loadedTests } = this.state;
    return loadedTests.map((test) => {
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
      return (
        <Question
          title={question}
          answer={correct_answer}
          options={options}
          testsAmount={loadedTests.length}
        />
      );
    });
  }

  render() {
    const { loadedTests, finalResult, totalAmount } = this.state;
    const testScore = `${finalResult} / ${totalAmount}`;

    if (loadedTests.length && !finalResult && !totalAmount) {
      const results = this.getQuestions();
      return (
        <div className={styles.board}>
          {results}
        </div>
      );
    }
    if (finalResult && totalAmount) {
      return (
        <div className={styles.score}>
          {testScore}
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
