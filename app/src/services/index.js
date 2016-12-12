import angular from 'angular';
import galleryService from './gallery-service';

const module = angular.module('services', []);

module.factory('galleryService', galleryService);

export default module.name;

