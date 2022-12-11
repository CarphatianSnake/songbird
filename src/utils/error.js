import { createElement, transition } from '.';

const error = (parent) => {

  const error = createElement({
    tag: 'div',
    classList: ['error', 'disabled', 'transition_in'],
    text: 'Error!\nSomething went wrong, please try again!'
  });

  setTimeout(() => {
    parent.classList.remove('spinner');
    parent.appendChild(error);
    transition(error);
  }, 150);

};

export default error;