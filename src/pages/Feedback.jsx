import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  messageFeedback = () => {
    const { assertions } = this.props;
    const assertionsMax = 3;
    return assertions < assertionsMax ? 'Could be better...' : 'Well Done!';
  };

  render() {
    const { assertions, score } = this.props;
    return (
      <div>
        <Header />
        <div data-testid="feedback-text">
          <h2 data-testid="feedback-text">{this.messageFeedback()}</h2>
          <p>Respostas corretas:</p>
          <p data-testid="feedback-total-question">{assertions}</p>
          <p>Placar final:</p>
          <p data-testid="feedbacfeedback-total-score">{score}</p>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number,
  assertions: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
