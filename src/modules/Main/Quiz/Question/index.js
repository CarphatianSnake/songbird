import BirdImage from '../../BirdImage';
import QuestionInfo from './QuestionInfo';

import { createElement } from '../../../../utils';

const Question = (parent, audio) => {

  const question = createElement({
    tag: 'section',
    classList: ['question']
  });

  BirdImage(question);
  QuestionInfo(question, audio);

  parent.appendChild(question);

};

export default Question;