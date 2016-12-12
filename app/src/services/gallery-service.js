import angular from 'angular';

var galleryService = angular.module('galleryService', []);

galleryService.factory('imageService',
  ['$http', 'apiUrl', function($http, apiUrl) {

    this.get = function() {
      console.log('is someone calling the get in $http?');
      $http.get(`${apiUrl}/`)
        .then(res => {
          return res.data;
        });
    };
  }]);


export default galleryService;

// WORKS:
// galleryService.$inject = ['$http', 'apiUrl'];
//
// export default function galleryService($http, apiUrl) {
//
//   return {
//     get() {
//       return $http.get(`${apiUrl}/`)
//         .then(res => res.data);
//     }
//   };
// }
