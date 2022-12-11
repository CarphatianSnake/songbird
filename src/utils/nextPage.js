import { transition } from '.';

// To render next page you need to add next page component as second attribute
const nextPage = (currentPage) => {

  transition(currentPage, 'out');

  setTimeout(() => {
    currentPage.remove();
  }, 140);

};

export default nextPage;