const Logo = (parent) => {

  const logo = document.createElement('div');

  logo.classList.add('header__logo');

  parent.appendChild(logo);

};

export default Logo;