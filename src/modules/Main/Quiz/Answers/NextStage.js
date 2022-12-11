import renderQuiz from '../renderQuiz';
import Results from '../../Results';

import { createElement, elementRemove, nextPage } from '../../../../utils';

import birdsData from '../../../../data/birdsData';

const NextStage = () => {

  const quiz = document.querySelector('.quiz');

  const nextStageButton = createElement({
    tag: 'button',
    classList: ['btn', 'btn_next'],
    attributes: [
      {
        name: 'disabled'
      }
    ]
  });

  const span = createElement({
    tag: 'span',
    classList: ['btn__text'],
    text: +quiz.dataset.stage === birdsData.length ? 'Finish quiz' : 'Next stage'
  });

  nextStageButton.appendChild(span);

  quiz.appendChild(nextStageButton);

  nextStageButton.addEventListener('click', () => {

    const main = document.querySelector('.main');
    const quiz = main.querySelector('.quiz');
    const currentStage = +quiz.dataset.stage;

    elementRemove(main, 'quiz');

    if (currentStage < birdsData.length) {

      const nextStage = currentStage + 1;
      nextPage(quiz, renderQuiz(nextStage));

    } else {

      Results();
      
    }

  });

};

export default NextStage;