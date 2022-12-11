import GitHubLink from './GitHubLink';
import RSLink from './RSLink';

import { createElement, transition } from '../../utils';

const Footer = () => {

  const container = document.querySelector('.container');

  const footer = createElement({
    tag: 'footer',
    classList: ['footer', 'disabled', 'transition_in']
  });

  GitHubLink(footer);

  const span = createElement({
    tag: 'span',
    text: '2022'
  });

  footer.appendChild(span);
  
  RSLink(footer);

  container.appendChild(footer);

  transition(footer);

};

export default Footer;