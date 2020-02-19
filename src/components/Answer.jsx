import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/main.scss';

export const Answer = ({ text, correctAnswer }) => {
  const [validatedAnswer, getAnswer] = useState(null);
  const answerClassName = `${styles.answer} ${validatedAnswer
    ? styles.valid : ''}${validatedAnswer === false
    ? styles.invalid : ''}`;
  return (
    <div
      key={text}
      role="presentation"
      onClick={() => getAnswer(correctAnswer)}
      dangerouslySetInnerHTML={{ __html: `${text}` }}
      className={answerClassName}
    />
  );
};

Answer.propTypes = {
  text: PropTypes.string,
  correctAnswer: PropTypes.bool,
};

Answer.defaultProps = {
  text: '',
  correctAnswer: false,
};
