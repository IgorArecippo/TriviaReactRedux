import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Ranking extends Component {
  render() {
    const { history } = this.props;
    return (
      <div data-testid="ranking-title">
        <h1>Ranking</h1>
        <button
          type="button"
          onClick={ () => history.push('/') }
          data-testid="btn-go-home"
        >
          Voltar ao início
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Ranking;
