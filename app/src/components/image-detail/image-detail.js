import template from './image-detail.html';
import style from './image-detail.scss';

export default {
  bindings: {
    image: '=',
    view: '@'
  },
  controller,
  template
};

function controller() {
  this.style = style;
}