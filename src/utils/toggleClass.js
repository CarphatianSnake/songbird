const toggleClass = (item, from, to) => {

  item.classList.remove(from);
  item.classList.add(to);

};

export default toggleClass;