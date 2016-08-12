/**
 * Created by olga on 11.08.16.
 */

angular.module('testApp')
    .controller('IndexController', [function () {
      
    }])

    .controller('ItemController', ['$scope', function ($scope) {

      $scope.items = [];
      $scope.add = function(){
        $scope.items.push($scope.title);
      };

      $scope.removeItem = function() {
        $scope.items.splice($scope.toRemove, 1);
        $scope.toRemove = null;
      };

      $scope.saveItem = localStorage.getItem('items');
      //$scope.items = (localStorage.getItem('items')!==null)
      //    ? JSON.parse($scope.saveItem)
      //    : localStorage.setItem('items', JSON.stringify($scope.items));
      //
      //$scope.addItem = function() {
      //  $scope.items.push({
      //    text: $scope.itemText,
      //    done: false
      //  });
      //  $scope.itemText = '';
      //  localStorage.setItem('items', JSON.stringify($scope.items));
      //};
      //

   
     
      // $scope.saveComment = localStorage.getItem('comments');
      // $scope.comments = (localStorage.getItem('comments')!==null)
      //     ? JSON.parse($scope.saveComment)
      //     : localStorage.setItem('comments', JSON.stringify($scope.comments));
      
      // $scope.addComment = function (item, comment) {
      //   item.comment.push({
      //     comment: $scope.commentText,
      //     done:false
      //   });
      //   $scope.commentText = '';
      //   localStorage.setItem('comments', JSON.stringify($scope.comments));
      // }

    }])

    .controller('CommentController', [function ($scope) {

        $scope.comments = [];
        $scope.addCom = function(){
            $scope.items.comments.push($scope.commentTitle);
        };

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