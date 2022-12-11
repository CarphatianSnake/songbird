import { transition } from '.';

const elementRemove = (parent, elementClass) => {

  [...parent.children].forEach(item => {
    if (item.classList.contains(elementClass) || item.classList.contains('error')) {

      transition(item, 'out');

      setTimeout(() => {
        item.remove();
      }, 150);

    }
  });

};

export default elementRemove;