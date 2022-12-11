const setActiveNavItem = (pageTitle) => {

  const nav = document.querySelectorAll('.nav-btn');

  nav.forEach(item => {

    if (item.getAttribute('title') === pageTitle) {
      item.setAttribute('disabled', '');
    } else {
      item.removeAttribute('disabled');
    }

  });

};

export default setActiveNavItem;