import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/main.scss';
import { Answer } from './Answer';

export const Questions = ({
  title, answer, options,
}) => {
  /* eslint-disable implicit-arrow-linebreak */
  const rows = options.map((option) => (
    <Answer
      key={title}
      correctAnswer={answer === option}
      text={option}
    />
  ));
  return (
    <div
      className={styles.question}
      role="presentation"
    >
      <div
        dangerouslySetInnerHTML={{ __html: `${title}` }}
        className={styles.question_title}
      />
      <div className={styles.options}>{rows}</div>
    </div>
  );
};

Questions.propTypes = {
  title: PropTypes.string,
  answer: PropTypes.string,
  options: PropTypes.array,
};

Questions.defaultProps = {
  title: '',
  answer: '',
  options: [],
};
