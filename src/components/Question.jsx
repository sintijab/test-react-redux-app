import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../styles/main.scss';
import { addScoreToResults } from '../actions';
import { Answer } from './Answer';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionDisabled: false,
      showCorrectAnswer: false,
    };
    this.disableQuestion = this.disableQuestion.bind(this);
  }

  disableQuestion(isValidAnswer) {
    const { props, state } = this;

    if (!state.questionDisabled) {
      this.setState({
        questionDisabled: true,
        showCorrectAnswer: isValidAnswer === false,
      });
      const iterationsLeft = props.iterationsScore === 0
        ? props.testsAmount : props.iterationsScore;
      let finalResult = props.finalScore;
      if (isValidAnswer) {
        finalResult = props.finalScore === null
          ? 1 : props.finalScore + 1;
      }
      props.addScoreToResults(finalResult, iterationsLeft);
    }
  }

  render() {
    const { title, answer, options } = this.props;
    const { showCorrectAnswer, questionDisabled } = this.state;
    const highlightAnswer = showCorrectAnswer && questionDisabled;

    /* eslint-disable implicit-arrow-linebreak */
    const rows = options.map((option) => (
      <Answer
        correctAnswer={answer === option}
        highlightValidAnswer={highlightAnswer && answer === option}
        questionDisabled={questionDisabled}
        text={option}
        disableQuestion={this.disableQuestion}
      />
    ));
    return (
      <div
        className={styles.question}
        key={`${answer}-${title}`}
      >
        <div
        // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: `${title}` }}
          className={styles.question_title}
        />
        <div className={styles.options}>{rows}</div>
      </div>
    );
  }
}

Question.propTypes = {
  title: PropTypes.string,
  answer: PropTypes.string,
  iterationsScore: PropTypes.number,
  finalScore: PropTypes.number,
  testsAmount: PropTypes.number,
  options: PropTypes.array,
  addScoreToResults: PropTypes.func,
};

Question.defaultProps = {
  title: '',
  answer: '',
  iterationsScore: 0,
  finalScore: null,
  testsAmount: 0,
  options: [],
  addScoreToResults: () => {},
};

const mapStateToProps = (state) => ({
  tests: state.tests.results,
  iterationsScore: state.score.iterationsScore,
  finalScore: state.score.finalScore,
  error: state.error,
});

export default connect(
  mapStateToProps,
  { addScoreToResults },
)(Question);
