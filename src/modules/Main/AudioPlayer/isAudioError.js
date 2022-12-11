import { error } from '../../../utils';

const isAudioError = (audio, parent) => {

  audio.addEventListener('error', () => {

    [...parent.children].forEach(el => {
      el.remove()
    });
    
    error(parent);

  });

};

export default isAudioError;