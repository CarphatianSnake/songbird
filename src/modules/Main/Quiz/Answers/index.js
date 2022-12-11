import AnswersList from './AnswersList';
import BirdInfo from './BirdInfo';

import { createElement } from '../../../../utils';

const Answers = (data, questionId, questionData) => {

  const quiz = document.querySelector('.quiz');

  const answers = createElement({
    tag: 'section',
    classList: ['answers']
  });

  quiz.appendChild(answers);

  AnswersList(data, questionId, questionData);
  BirdInfo();

};

export default Answers;