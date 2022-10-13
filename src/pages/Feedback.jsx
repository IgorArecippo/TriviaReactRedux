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
    const { assertions, score, history } = this.props;
    return (
      <div>
        <Header />
        <div data-testid="feedback-text">
          <h2 data-testid="feedback-text">{this.messageFeedback()}</h2>
          <p>Respostas corretas:</p>
          <p data-testid="feedback-total-question">{assertions}</p>
          <p>Placar final:</p>
          <p data-testid="feedback-total-score">{score}</p>

          <button
            type="button"
            onClick={ () => history.push('/') }
            data-testid="btn-play-again"
          >
            Play again
          </button>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number,
  assertions: PropTypes.number,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
