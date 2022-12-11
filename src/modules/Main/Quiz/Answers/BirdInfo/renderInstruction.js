import { createElement } from '../../../../../utils';

const renderInstruction = () => {

  const container = document.querySelector('.answers__info');

  const instructions = createElement({
    tag: 'p',
    classList: ['answers__info__instruction']
  });

  ['Listen to the player.', 'Choose bird from the list.'].forEach(item => {

    const span = createElement({
      tag: 'span',
      classList: ['answers__info__instruction__text'],
      text: item
    });

    instructions.appendChild(span);

  });

  container.appendChild(instructions);

};

export default renderInstruction;