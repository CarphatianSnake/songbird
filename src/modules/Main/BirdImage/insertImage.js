import { transition } from '../../../utils';

const insertImage = (container, url, alt) => {

  container.classList.add('spinner');

  new Promise((resolve, reject) => {

    const img = new Image();

    img.classList.add('bird-image', 'disabled', 'transition_in');
    img.src = url;
    img.alt = alt;

    img.onload = () => {

      container.classList.remove('spinner');

      resolve(setTimeout(() => {
        container.appendChild(img);
        transition(img);
      }, 150));

    }

    img.onerror = e => {
      reject(e);
    }

  });

};

export default insertImage;