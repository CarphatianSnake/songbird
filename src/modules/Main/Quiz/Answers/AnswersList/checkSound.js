const checkSound = (boolean) => {

  const correct = document.querySelector('.correct-sound');
  const error = document.querySelector('.error-sound');

  const playSound = (sound) => {
    sound.volume = 0.3;
    sound.currentTime = 0;
    sound.play();
  };

  boolean ? playSound(correct) : playSound(error);

};

export default checkSound;