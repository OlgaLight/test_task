/**
 * Created by olga on 11.08.16.
 */

angular.module('testApp')
    .controller('IndexController', [function () {

    }])
    .controller('ItemController', ['$scope', function ($scope) {

      $scope.activeItemIndex = 0;

      $scope.savedItems = localStorage.getItem('items');
      $scope.items = ($scope.savedItems !== null)
          ? JSON.parse($scope.savedItems)
          : [];

      $scope.addItem = function () {
        $scope.items.push({
          id: $scope.items.length + 1,
          text: $scope.itemText,
          comments: []
        });
        $scope.itemText = '';
        localStorage.setItem('items', JSON.stringify($scope.items));
      };

      //
      $scope.removeItem = function () {
        $scope.items.splice($scope.toRemove, 1);
        $scope.toRemove = null;
        localStorage.setItem('items', JSON.stringify($scope.items));
      };

      $scope.selectItem = function (id) {
        $scope.activeItemIndex = id;

      };


      $scope.addComment = function () {
        if ($scope.items.length == 0){
          alert("Please, add item first!");
          return;
        }
        $scope.items[$scope.activeItemIndex].comments.push($scope.itemComment);
        $scope.itemComment = '';
        localStorage.setItem('items', JSON.stringify($scope.items));
      };

      $scope.badgeCounter = function (index) {
        return $scope.items[index].comments.length;

      };

    }])


    .controller('CommentController', [function ($scope) {

    }]);