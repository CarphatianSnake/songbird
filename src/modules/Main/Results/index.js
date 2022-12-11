import Quiz from '../Quiz';

import { createElement, createDiv, transition, elementRemove, nextPage } from '../../../utils';

import birdsData from '../../../data/birdsData';

const Results = () => {

  const header = document.querySelector('.header');
  const headerTopPanel = header.querySelector('.header__top');
  const nav = headerTopPanel.querySelectorAll('.nav-btn');
  const main = document.querySelector('.main');
  const score = document.querySelector('.header__scores__value').innerText;
  const maxScore = birdsData.length * 5;

  const textContent = score === maxScore ? 
      'You won the quiz and scored the maximum possible points!' :
      `You completed the quiz and scored ${score} out of ${maxScore} possible scores!`;

  const buttonText = score === maxScore ? 'Play again' : 'Try again';

  const results = createDiv(['results', 'disabled', 'transition_in']);

  const heading = createElement({
    tag: 'h1',
    classList: ['results__heading'],
    text: 'Congratulations!'
  });

  results.appendChild(heading);

  const text = createElement({
    tag: 'p',
    classList: ['results__text'],
    text: textContent
  });

  results.appendChild(text);

  const separator = createElement({
    tag: 'hr',
    classList: ['results__separator']
  });

  results.appendChild(separator);

  const button = createElement({
    tag: 'button',
    classList: ['btn', 'btn_results'],
    text: buttonText
  });

  results.appendChild(button);

  setTimeout(() => {
    main.appendChild(results);
    transition(results);
  }, 150);

  elementRemove(header, 'pagination');
  elementRemove(headerTopPanel, 'header__scores');

  nav.forEach(item => item.removeAttribute('disabled'));

  button.addEventListener('click', () => {
    nextPage(results, Quiz());
  });

};

export default Results;