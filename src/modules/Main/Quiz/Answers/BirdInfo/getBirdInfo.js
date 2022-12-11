import birdsData from '../../../../../data/birdsData';

const getBirdInfo = (id) => {

  const quiz = document.querySelector('.quiz');

  const stage = +quiz.dataset.stage;

  const data = birdsData[stage - 1].find(bird => bird.id === id);

  return data;

};

export default getBirdInfo;