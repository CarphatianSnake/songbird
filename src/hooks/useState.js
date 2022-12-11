const useState = (init = null) => {

  let state = init;

  const setState = (value) => {
    state = value;
  };

  const dispatch = () => {
    return state;
  }

  return { setState, dispatch };

};

export default useState;