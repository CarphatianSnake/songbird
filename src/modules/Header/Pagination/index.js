import { createElement, transition } from '../../../utils';

const Pagination = (parent, stage) => {

  const items = ['Warm-up', 'Passerines', 'Forest birds', 'Songbirds', 'Predator birds', 'Sea birds'];

  const ul = createElement({
    tag: 'ul',
    classList: ['pagination', 'disabled', 'transition_in']
  });

  items.forEach((item, index) => {

    const li = createElement({
      tag: 'li',
      classList: ['pagination__item'],
      text: item
    });

    if (index === stage - 1) {
      li.classList.add('pagination__item_active');
    }

    ul.appendChild(li);

  });

  parent.appendChild(ul);

  transition(ul);

};

export default Pagination;