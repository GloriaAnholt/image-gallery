import template from './image-app.html';
import style from './image-app.css';

export default {
  template,
  controller,
  controllerAs: 'app'
};

controller.$inject = ['galleryService'];

function controller(galleryService) {
  this.style = style;
  this.loading = true;
  this.images;
  this.view;

  galleryService
    .get()
    .then(images => {
      this.images = images;
      this.loading = false;
    });


}