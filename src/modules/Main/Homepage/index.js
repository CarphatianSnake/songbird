import Quiz from '../Quiz';

import setActiveNavItem from '../../Header/Navigation/setActiveNavItem';
import { createElement, createDiv, nextPage, elementRemove, transition } from '../../../utils';

const Homepage = () => {

  const header = document.querySelector('.header');
  const headerTop = header.querySelector('.header__top');
  const main = document.querySelector('.main');

  elementRemove(header, 'pagination');
  elementRemove(headerTop, 'header__scores');

  setActiveNavItem('Home');

  const home = createDiv(['homepage', 'disabled', 'transition_in']);

  const btn = createElement({
    tag: 'button',
    classList: ['btn', 'btn_play'],
    text: 'Start Quiz'
  });

  home.appendChild(btn);

  btn.addEventListener('click', () => {
    nextPage(home, Quiz());
  });

  setTimeout(() => {
    main.appendChild(home);
    transition(home);
  }, 150);

};

export default Homepage;