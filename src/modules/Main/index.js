import Homepage from './Homepage';

import { createElement } from '../../utils';

const Main = () => {

  const container = document.querySelector('.container');

  const main = createElement({
    tag: 'main',
    classList: ['main']
  });

  container.appendChild(main);

  Homepage();

};

export default Main;