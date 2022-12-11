const createElement = (options) => {

  const element = document.createElement(options.tag);

  if (options.classList) {
    element.classList.add(...options.classList);
  }

  if (options.attributes) {
    options.attributes.forEach(attr => {
      element.setAttribute(attr.name, attr.value ? attr.value : '');
    });
  }

  if (options.text) {
    element.innerText = options.text;
  }

  return element;

};

export default createElement;