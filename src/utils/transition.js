const transition = (target, action = 'in') => {

  if (action === 'in') {
    setTimeout(() => {
      target.classList.remove('disabled');
      setTimeout(() => {
        target.classList.remove('transition_in');
      }, 150)
    }, 300);
  }

  if (action === 'out') {
    target.classList.add('transition_out', 'disabled');
  }

};

export default transition;