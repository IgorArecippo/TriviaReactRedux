import React from 'react';
import { renderWithRouterAndRedux } from '../tests/helpers/renderWithRouterAndRedux';
import Ranking from '../pages/Ranking';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Testa a tela de Ranking', () => {
  it('', () => {
    const { history } = renderWithRouterAndRedux(<Ranking />)
     
    const textRankink = screen.getByRole('heading', {
      name: /ranking/i
    });
    expect(textRankink).toBeInTheDocument();
    
    const btnBack = screen.getByRole('button', {
      name: /voltar ao início/i
    });
    expect(btnBack).toBeInTheDocument();
    userEvent.click(btnBack);
    expect(history.location.pathname).toBe('/');

  })
})