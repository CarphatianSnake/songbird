import insertImage from './insertImage';

import { createElement, transition } from '../../../utils';

import randomBird from './random-bird.jpg';

const BirdImage = (parent, url = randomBird, alt = 'Random bird image') => {

  const container = createElement({
    tag: 'div',
    classList: ['image-container', 'spinner', 'disabled', 'transition_in']
  });

  setTimeout(() => {
    parent.appendChild(container);
    transition(container);
  }, 150);

  insertImage(container, url, alt);

};

export default BirdImage;