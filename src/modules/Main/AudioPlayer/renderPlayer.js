import { createDiv, transition } from '../../../utils';

const renderPlayer = (parent, audio) => {

  const player = createDiv(['audio-player']);

  player.appendChild(audio);

  const controls = createDiv(['audio-player__controls']);
  const playBtn = createDiv(['audio-player__controls__playback-btn']);
  const playIcon = createDiv(['audio-player__controls__playback-btn__icon', 'play']);

  playBtn.appendChild(playIcon);
  controls.appendChild(playBtn);

  const timebar = createDiv(['audio-player__controls__timebar']);
  const bar = createDiv(['audio-player__controls__timebar__bar']);
  bar.style = 'background: linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) 0%, rgb(115, 115, 115) 0%, rgb(115, 115, 115) 100%);';
  const circle = createDiv(['audio-player__controls__timebar__circle']);
  const info = createDiv(['audio-player__controls__timebar__info']);
  const currentTime = createDiv(['audio-player__controls__timebar__info__current-time']);
  const totalTime = createDiv(['audio-player__controls__timebar__info__total-time']);

  info.appendChild(currentTime);
  info.appendChild(totalTime);
  timebar.appendChild(circle);
  timebar.appendChild(bar);
  timebar.appendChild(info);
  controls.appendChild(timebar);

  player.appendChild(controls);

  parent.appendChild(player);

  setTimeout(() => {
    transition(player)
  }, 150);

  return {
    playBtn,
    playIcon,
    bar,
    circle,
    currentTime,
    totalTime,
    timebar
  };

};

export default renderPlayer;