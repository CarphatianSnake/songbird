import Homepage from '../../Main/Homepage';
import Quiz from '../../Main/Quiz';

import setActiveNavItem from './setActiveNavItem';
import { createElement, nextPage } from '../../../utils';

const Navigation = (parent) => {

  const nav = createElement({
    tag: 'ul',
    classList: ['header__navigation']
  });

  ['Home', 'Quiz'].forEach(item => {

    const template = {
      tag: 'button',
      classList: ['nav-btn'],
      attributes: [
        {
          name: 'href',
          value: '#'
        },
        {
          name: 'title',
          value: item
        }
      ],
      text: item
    };

    const li = createElement({tag: 'li'});
    const btn = createElement(template);

    li.appendChild(btn);
    nav.appendChild(li);

  });

  nav.addEventListener('click', (e) => {

    const target = e.target;
    const title = target.getAttribute('title');

    setActiveNavItem(title);

    const main = document.querySelector('.main');
    const currentPage = main.children[0];

    if (title === 'Home') {
      nextPage(currentPage, Homepage());
    }

    if (title === 'Quiz') {
      nextPage(currentPage, Quiz());
    }

  })

  parent.appendChild(nav);

};

export default Navigation;