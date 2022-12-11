import { createAudio } from '../utils';

import correct from '../audio/correct.mp3';
import error from '../audio/error.mp3';

const answerSounds = () => {

  const body = document.querySelector('body');
  const sounds = ['correct', 'error'];

  sounds.forEach(type => {

    const sound = type === 'correct' ? createAudio(correct) : createAudio(error);
    sound.classList.add(`${type}-sound`);
    body.appendChild(sound);

  });

};

export default answerSounds;