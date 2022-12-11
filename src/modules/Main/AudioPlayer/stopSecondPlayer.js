import { toggleClass } from '../../../utils';

const stopSecondPlayer = (parent) => {

  const pause = (className) => {

    if (document.querySelector(className)) {
      const secondParent = document.querySelector(className);
      const player = secondParent.querySelector('audio');
      const icon = secondParent.querySelector('.audio-player__controls__playback-btn__icon');
      toggleClass(icon, 'pause', 'play');
      player.pause();
    }

  };

  if (parent.classList.contains('question__info')) {
    pause('.answers__info__details__bird-card__group');
  } else {
    pause('.question__info');
  }

};

export default stopSecondPlayer;