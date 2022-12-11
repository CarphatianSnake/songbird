import Question from './Question';
import Answers from './Answers';
import Pagination from '../../Header/Pagination';

import isAudioError from '../AudioPlayer/isAudioError';

import birdsData from '../../../data/birdsData';

import { createDiv, transition, createAudio } from '../../../utils';

const renderQuiz = (stage = 1) => {

  const main = document.querySelector('.main');
  const header = document.querySelector('.header');
  const pagination = document.querySelector('.pagination');

  const stageData = birdsData[stage - 1];
  const questionId = Math.floor(Math.random() * stageData.length) + 1;
  const questionData = stageData.find(item => item.id === questionId);

  const quiz = createDiv(['quiz', 'disabled', 'transition_in']);

  quiz.dataset.stage = stage;

  setTimeout(() => {
    main.classList.add('spinner');
  }, 150);

  const audio = createAudio(questionData.audio);
  isAudioError(audio, main);

  audio.addEventListener('loadeddata', () => {

    if (audio.readyState >= 2) {

      if (pagination) {
        
        const paginationItems = pagination.querySelectorAll('.pagination__item');

        paginationItems.forEach((item, index) => {

          if (index === stage - 1) {
            item.classList.add('pagination__item_active');
          } else {
            item.classList.remove('pagination__item_active');
          }

        });

      } else {

        setTimeout(() => {
          Pagination(header, stage)
        }, 150);
        
      }

      setTimeout(() => {
        
        main.classList.remove('spinner');
        main.appendChild(quiz);
        transition(quiz);
        Question(quiz, audio);
        Answers(stageData, questionId, questionData);

      }, 150);

    }

  });

};

export default renderQuiz;