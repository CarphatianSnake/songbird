import checkAnswer from './checkAnswer';
import renderAnswersList from './renderAnswersList';
import NextStage from '../NextStage';

const AnswersList = (data, questionId, questionData) => {

  renderAnswersList(data);
  NextStage();
  checkAnswer(questionId, questionData);

};

export default AnswersList;