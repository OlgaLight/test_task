/**
 * Created by olga on 11.08.16.
 */

angular.module('testApp')
    .controller('IndexController', [function () {

    }])
    .controller('ItemController', ['$scope', function ($scope) {

      // $scope.activeItemComments = [];
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
      $scope.removeItem = function() {
        $scope.items.splice($scope.toRemove, 1);
        $scope.toRemove = null;
        localStorage.setItem('items', JSON.stringify($scope.items));
      };

      $scope.selectItem = function (id) {
        $scope.activeItemIndex = id;
        
        // $scope.activeItemComments.length = 0;
        // $scope.activeItemComments.push($scope.items[$scope.activeItemIndex].comments);
        // for (var i = 0; i < $scope.items[$scope.activeItemIndex].comments.length; i++) {
        //   $scope.activeItemComments.push($scope.items[$scope.activeItemIndex].comments[i])
        // }
        // $scope.$apply(function () {
        //   console.log(comments);
        //   $scope.comments = comments;
        // });
      };


      $scope.addComment = function () {
        $scope.items[$scope.activeItemIndex].comments.push($scope.itemComment);
        $scope.itemComment = '';
        localStorage.setItem('items', JSON.stringify($scope.items));
      };

      $scope.badgeCounter = function(index) {
        return $scope.items[index].comments.length;

      };

    }])


    .controller('CommentController', [function ($scope) {
      
      // $scope.comments = [];
      // $scope.addCom = function(){
      //     $scope.items.comments.push($scope.commentTitle);
      // };

      //
      //$scope.comments = (localStorage.getItem('comments')!==null)
      //    ? JSON.parse($scope.saveComment)
      //    : localStorage.setItem('comments', JSON.stringify($scope.comments));
      //
      //$scope.addComment = function() {
      //  $scope.comments.push({
      //    text: $scope.commentText,
      //    done: false
      //  });
      //  $scope.commentText = '';
      //  localStorage.setItem('comments', JSON.stringify($scope.items.comments));
      //};
      //
      //$scope.badgeCounter = function() {
      //  var count = 0;
      //  angular.forEach($scope.comments, function(comment){
      //    count+= comment.done ? 0 : 1;
      //  });
      //  return count;
      //};
    }]);