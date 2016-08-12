/**
 * Created by olga on 11.08.16.
 */

var app = angular.module('testApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
      // route for the home page
          .state('app', {
            url:'/',
            views: {
              'sidebar': {
                templateUrl : 'partials/sidebar.html',
              },
            'content': {
              templateUrl: 'partials/home.html',
              controller  : 'IndexController'
            }
            }
          })
          // route for the item page
          .state('app.items', {
            url:'items',
            views: {
              'content@': {
                templateUrl: 'partials/items.html',
                controller  : 'ItemController'
              }
            }
          })

          // route for the comment page
          .state('app.comments', {
            url: 'items/comments',
            views: {
              'content@': {
                templateUrl : 'partials/comments.html',
                controller  : 'CommentController'
              }
            }
          });
      $urlRouterProvider.otherwise('/');
    })
;