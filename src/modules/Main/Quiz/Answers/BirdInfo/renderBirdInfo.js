import BirdImage from '../../../BirdImage';
import AudioPlayer from '../../../AudioPlayer';
import getBirdInfo from './getBirdInfo';
import isAudioError from '../../../AudioPlayer/isAudioError';

import { createDiv, createElement, createAudio, transition } from '../../../../../utils';

const renderBirdInfo = (birdId) => {
  
  const container = document.querySelector('.answers');

  const answers = createDiv(['answers__info', 'disabled', 'transition_in']);

  container.appendChild(answers);
  transition(answers);

  answers.classList.add('spinner');

  setTimeout(() => {

    const data = getBirdInfo(birdId);

    const audio = createAudio(data.audio);
    isAudioError(audio, answers);

    audio.addEventListener('loadeddata', () => {

      if (audio.readyState >= 2) {

        answers.classList.remove('spinner');

        const birdInfo = createDiv(['answers__info__details', 'disabled', 'transition_in']);
        const birdCard = createDiv(['answers__info__details__bird-card']);

        const birdDetails = createDiv(['answers__info__details__bird-card__group']);
        
        BirdImage(birdCard, data.image, data.name);
        
        const heading = createElement({
          tag: 'h3',
          classList: ['answers__info__details__bird-card__heading'],
          text: data.name
        });

        const species = createElement({
          tag: 'p',
          classList: ['answers__info__details__bird-card__species'],
          text: data.species
        });

        birdDetails.append(heading, species);

        AudioPlayer(birdDetails, audio);

        birdCard.appendChild(birdDetails);

        const description = createElement({
          tag: 'p',
          classList: ['answers__info__details__description'],
          text: data.description
        });

        birdInfo.append(birdCard, description);

        answers.appendChild(birdInfo);

        transition(birdInfo);

      }

    });

  }, 150);

  // const birdInfo = createDiv(['answers__info__details', 'disabled', 'transition_in']);
  // const birdCard = createDiv(['answers__info__details__bird-card']);

  // const birdDetails = createDiv(['answers__info__details__bird-card__group']);
  
  // BirdImage(birdCard, data.image, data.name);
  
  // const heading = createElement({
  //   tag: 'h3',
  //   classList: ['answers__info__details__bird-card__heading'],
  //   text: data.name
  // });

  // const species = createElement({
  //   tag: 'p',
  //   classList: ['answers__info__details__bird-card__species'],
  //   text: data.species
  // });

  // birdDetails.append(heading, species);

  // const audio = createAudio(data.audio);
  // isAudioError(audio, answers);

  // audio.addEventListener('loadeddata', () => {

  //   if (audio.readyState >= 2) {
  //     AudioPlayer(birdDetails, audio);
  //   }

  // });

  // birdCard.appendChild(birdDetails);

  // const description = createElement({
  //   tag: 'p',
  //   classList: ['answers__info__details__description'],
  //   text: data.description
  // });

  // birdInfo.append(birdCard, description);

  // answers.appendChild(birdInfo);

  // setTimeout(() => {
  //   container.appendChild(answers);
  //   transition(birdInfo);
  // }, 150);

};

export default renderBirdInfo;