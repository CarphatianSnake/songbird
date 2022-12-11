import createElement from './createElement';

const createAudio = (url) => {

  const audio = createElement({
    tag: 'audio',
    attributes: [
      {
        name: 'hidden'
      },
      {
        name: 'src',
        value: url
      }
    ]
  });

  return audio;

};

export default createAudio;