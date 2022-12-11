import { createElement } from '../../../../../utils';

const renderAnswersList = (data) => {

  const answers = document.querySelector('.answers');

  const list = createElement({
    tag: 'ul',
    classList: ['answers__list']
  });

  answers.appendChild(list);

  data.forEach(item => {

    const listItem = createElement({
      tag: 'li',
      classList: ['answers__list__item'],
      attributes: [
        {
          name: 'data-id',
          value: item.id
        }
      ]
    });

    const marker = createElement({
      tag: 'span',
      classList: ['answers__list__item__marker']
    });

    listItem.append(marker, item.name);

    list.appendChild(listItem);

  });

};

export default renderAnswersList;