import { transition, elementRemove, createElement } from '../../../../../utils';

const changeHeading = (string) => {

  const questionInfo = document.querySelector('.question__info');

  elementRemove(questionInfo, 'question__info__heading');

  const heading = createElement({
    tag: 'h3',
    classList: ['question__info__heading', 'disabled', 'transition_in'],
    text: string
  });

  setTimeout(() => {
    questionInfo.prepend(heading);
    transition(heading);
  }, 150);

};

export default changeHeading;