import useState from '../../../../../hooks/useState';

import insertImage from '../../../BirdImage/insertImage';
import changeHeading from './changeHeading';
import BirdInfo from '../BirdInfo';
import checkSound from './checkSound';

import { toggleClass, elementRemove, createElement, transition } from '../../../../../utils';

const checkAnswer = (questionId, questionData) => {

  const prevBird = useState();
  const isCorrect = useState(false);
  const scoreContainder = document.querySelector('.header__scores')
  const score = scoreContainder.querySelector('.header__scores__value');
  const scoreValue = +score.innerText;
  const points = useState(5);

  const list = document.querySelector('.answers__list');
  const player = document.querySelector('.audio-player');
  const questionSound = player.querySelector('audio');
  const playerBtn = player.querySelector('.audio-player__controls__playback-btn__icon');
  const question = document.querySelector('.question');
  const nextStageButton = document.querySelector('.btn_next');

  list.addEventListener('click', (e) => {

    const target = e.target;
    const targetId = +target.dataset.id;
    const marker = target.querySelector('.answers__list__item__marker');

    if (prevBird.dispatch() !== targetId) {
      BirdInfo(targetId);
      prevBird.setState(targetId);
    }

    if (!isCorrect.dispatch()) {

      if (targetId === questionId) {

        marker.classList.add('answers__list__item__marker_correct');
        checkSound(true);
        isCorrect.setState(true);
        
        questionSound.pause();
        toggleClass(playerBtn, 'pause', 'play');

        if (points.dispatch() !== 0) {

          elementRemove(scoreContainder, 'header__scores__value');

          setTimeout(() => {
  
            const newScore = createElement({
              tag: 'span',
              classList: ['header__scores__value', 'disabled', 'transition_in'],
              text: scoreValue + points.dispatch()
            });
    
            scoreContainder.appendChild(newScore);
  
            transition(newScore);
  
          }, 150);

        }

        const imageContainer = question.querySelector('.image-container');
        elementRemove(imageContainer, 'bird-image');
        insertImage(imageContainer, questionData.image, questionData.name);

        changeHeading(questionData.name);

        nextStageButton.removeAttribute('disabled');

      }

      else if (!target.classList.contains('checked')) {

        isCorrect.setState(false);
        points.setState(points.dispatch() - 1);
        checkSound(false);
        marker.classList.add('answers__list__item__marker_error');

        target.classList.add('checked');

      }

    }

  });

};

export default checkAnswer;