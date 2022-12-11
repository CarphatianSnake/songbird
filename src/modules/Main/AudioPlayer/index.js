import renderPlayer from './renderPlayer';
import timeValue from './timeValue';
import stopSecondPlayer from './stopSecondPlayer';

import { toggleClass } from '../../../utils';

const AudioPlayer = (parent, audio) => {

  const {
    playBtn,
    playIcon,
    bar,
    circle,
    currentTime,
    totalTime
  } = renderPlayer(parent, audio);

  currentTime.innerText = timeValue();
  totalTime.innerText = timeValue(audio.duration);

  circle.addEventListener('mousedown', () => {

    const controls = parent.querySelector('.audio-player__controls');

    let width = window.getComputedStyle(controls).getPropertyValue('width');
    width = +width.replace('px', '');
    let barWidth = window.getComputedStyle(bar).getPropertyValue('width');
    barWidth = +barWidth.replace('px', '');

    const widthOffset = width - barWidth ;

    const move = (e) => {

      const offset = e.offsetX < widthOffset ? 0 : e.offsetX - widthOffset;

      let progress = (offset / barWidth) * 100;
      progress = progress > 100 ? 100 : progress;
      circle.style = `left: ${progress}%;`;
      bar.style = `background: linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${progress}%, rgb(115, 115, 115) ${progress}%, rgb(115, 115, 115) 100%);`;

      audio.currentTime = progress / 100 * audio.duration;
      currentTime.innerText = timeValue(audio.currentTime);

    }

    circle.classList.add('active-circle');

    controls.addEventListener('mousemove', move);
  
    controls.addEventListener('mouseup', () => {
      controls.removeEventListener('mousemove', move);
      circle.classList.remove('active-circle');
    });

  });

  let intervalId;
  
  playBtn.addEventListener('click', () => {

    if (audio.paused) {

      if (audio.currentTime === audio.duration) {
        audio.currentTime = 0;
      }

      stopSecondPlayer(parent);

      audio.play();
      toggleClass(playIcon, 'play', 'pause');

      intervalId = setInterval(() => {

        const progress = audio.currentTime / audio.duration * 100;

        circle.style = `left: ${progress}%`;
        currentTime.innerText = timeValue(audio.currentTime);
        bar.style = `background: linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${progress}%, rgb(115, 115, 115) ${progress}%, rgb(115, 115, 115) 100%);`;

      }, 10);

    } else {

      audio.pause();
      toggleClass(playIcon, 'pause', 'play');

      clearInterval(intervalId);

    }

  });

  audio.addEventListener('ended', () => {
    toggleClass(playIcon, 'pause', 'play');
  });

};

export default AudioPlayer;