const timeValue = (seconds = 0) => {

  const addZero = value => {
    const time = Math.floor(value).toString();
    return time.length > 1 ? time : `0${time}`;
  };

  const min = addZero(seconds / 60);
  const sec = addZero(seconds % 60);

  return `${min}:${sec}`;

};

export default timeValue;