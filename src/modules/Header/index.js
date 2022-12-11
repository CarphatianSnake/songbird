import Logo from './Logo';
import Navigation from './Navigation';

import { createElement, createDiv, transition } from '../../utils';

const Header = () => {

  const container = document.querySelector('.container');

  const header = createElement({
    tag: 'header',
    classList: ['header', 'disabled', 'transition_in']
  });

  container.appendChild(header);

  const top = createDiv(['header__top']);

  Logo(top);

  Navigation(top);

  header.appendChild(top);

  transition(header);

};

export default Header;