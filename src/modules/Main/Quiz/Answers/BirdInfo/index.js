import renderInstruction from './renderInstruction';
import renderBirdInfo from './renderBirdInfo';

import { createDiv, elementRemove } from '../../../../../utils';

const BirdInfo = (birdId = null) => {

  const answers = document.querySelector('.answers');

  if (birdId) {

    elementRemove(answers, 'answers__info');

    setTimeout(() => {
      renderBirdInfo(birdId);
    }, 150);


  } else {

    const container = createDiv(['answers__info']);
  
    answers.appendChild(container);

    renderInstruction();

  }

};

export default BirdInfo;