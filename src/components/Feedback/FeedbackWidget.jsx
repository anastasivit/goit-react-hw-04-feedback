import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackWidget.module.css';
import Notification from './Notification';

const FeedbackWidget = ({ onLeaveFeedback, good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  return (
    <div className={styles.container}>
      <p className={styles.title}>Please leave feedback</p>
      <div className={styles['button-group']}>
        <button
          className={styles.button}
          onClick={() => onLeaveFeedback('good')}
        >
          Good
        </button>
        <button
          className={styles.button}
          onClick={() => onLeaveFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={styles.button}
          onClick={() => onLeaveFeedback('bad')}
        >
          Bad
        </button>
      </div>
      {totalFeedback > 0 ? (
        <div>
          <p className={styles.title}>Statistics</p>
          <div className={styles.statistics}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive feedback: {positivePercentage}%</p>
          </div>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

FeedbackWidget.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default FeedbackWidget;
