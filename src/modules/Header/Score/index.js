import { createElement, createDiv, transition } from '../../../utils';

const Score = (scores = 0) => {

  const header = document.querySelector('.header__top');

  const score = createDiv(['header__scores', 'disabled', 'transition_in']);
  score.innerText = 'Score: ';

  const points = createElement({
    tag: 'span',
    classList: ['header__scores__value'],
    text: scores.toString()
  });

  score.appendChild(points);

  header.appendChild(score);

  transition(score);

  return points;

};

export default Score;