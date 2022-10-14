import React from 'react';
import Feedback from '../pages/Feedback';
import { renderWithRouterAndRedux } from '../tests/helpers/renderWithRouterAndRedux';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { state1, state2 } from '../tests/helpers/mocks';
import App from '../App';




describe('Testa a página de feedback', () => {
  
  it('Verifica os itens renderizados na tela de feedback', () => {
    renderWithRouterAndRedux(<Feedback />);

    const name = screen.getByTestId('header-player-name');
    const points = screen.getByTestId('header-score');const image = screen.getByTestId('header-profile-picture');
    // const phrase = screen.getByTestId('feedback-text');
    const textResposeCorrect = screen.getByText(/respostas corretas:/i);
    const assertions = screen.getByTestId('feedback-total-question');
    const textPlacar = screen.getByText(/placar final:/i);
    const placarFinal = screen.getByTestId('feedback-total-score');

    expect(name).toBeInTheDocument();
    expect(points).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    // expect(phrase).toBeInTheDocument();
    expect(textResposeCorrect).toBeInTheDocument();
    expect(assertions).toBeInTheDocument();
    expect(textPlacar).toBeInTheDocument();
    expect(placarFinal).toBeInTheDocument();

  })
  
  it('Verifica se tem o botão de Play again e Login', async () => {
    const { history } = renderWithRouterAndRedux(<Feedback />);

    const btnPlayAgain = screen.getByRole('button', {
      name: /play again/i
    });
    expect(btnPlayAgain).toBeInTheDocument();
    userEvent.click(btnPlayAgain);
    expect(history.location.pathname).toBe('/');
  })
  
  it('', () => {
    const { history } = renderWithRouterAndRedux(<Feedback />);
    const btnRanking = screen.getByTestId('btn-ranking');
    expect(btnRanking).toBeInTheDocument();
    userEvent.click(btnRanking);
    expect(history.location.pathname).toBe('/ranking');
  })

  it('', () => {
    renderWithRouterAndRedux(<App/>, state2, '/feedback');

    const msg = screen.getByTestId('feedback-text');
    expect(msg).toBeInTheDocument();
    expect(msg).toEqual('Well Done!')
  })
})