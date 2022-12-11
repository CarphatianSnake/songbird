import createElement from "./createElement";

const createDiv = (classList) => createElement({
    tag: 'div',
    classList: classList
  });

export default createDiv;