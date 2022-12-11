import AudioPlayer from '../../AudioPlayer';

import { createElement } from '../../../../utils';

const QuestionInfo = (parent, audio) => {

  const container = createElement({
    tag: 'div',
    classList: ['question__info']
  });

  const heading = createElement({
    tag: 'h3',
    classList: ['question__info__heading'],
    text: '******'
  });

  container.appendChild(heading);

  AudioPlayer(container, audio);

  parent.appendChild(container);

};

export default QuestionInfo;