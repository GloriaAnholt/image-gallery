import template from './image-detail.html';
import style from './image-detail.css';

export default {
  bindings: {
    image: '<'
  },
  controller,
  template
}

function controller() {
  this.style = style;
}