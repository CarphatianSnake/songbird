import { createElement } from '../../../utils';

const RSLink = (parent) => {

  const link = createElement({
    tag: 'a',
    classList: ['footer__rs-logo'],
    attributes: [
      {
        name: 'href',
        value: 'https://rs.school/js/'
      },
      {
        name: 'title',
        value: 'RS School JS Course'
      }
    ]
  });

  parent.appendChild(link);

};

export default RSLink;