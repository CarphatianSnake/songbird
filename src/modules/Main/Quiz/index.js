import Score from '../../Header/Score';
import setActiveNavItem from '../../Header/Navigation/setActiveNavItem';

import renderQuiz from './renderQuiz';

const Quiz = () => {

  Score();
  setActiveNavItem('Quiz');
  renderQuiz();

};

export default Quiz;