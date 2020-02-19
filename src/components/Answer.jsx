import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/main.scss';

export const Answer = ({
  text, correctAnswer, disableQuestion, highlightValidAnswer, questionDisabled,
}) => {
  const [validAnswer, getAnswer] = useState(null);
  const answerClassName = `${styles.answer} ${(validAnswer || highlightValidAnswer)
    ? styles.valid : ''}${validAnswer === false
    ? styles.invalid : ''}`;
  if ((validAnswer || validAnswer === false) && !questionDisabled) {
    disableQuestion(validAnswer);
  }
  return (
    <div
    // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: `${text}` }}
      role="presentation"
      onClick={() => getAnswer(correctAnswer)}
      className={answerClassName}
    />
  );
};

Answer.propTypes = {
  text: PropTypes.string,
  correctAnswer: PropTypes.bool,
  disableQuestion: PropTypes.func,
  highlightValidAnswer: PropTypes.bool,
  questionDisabled: PropTypes.bool,
};

Answer.defaultProps = {
  text: '',
  correctAnswer: false,
  disableQuestion: () => {},
  highlightValidAnswer: false,
  questionDisabled: false,
};
