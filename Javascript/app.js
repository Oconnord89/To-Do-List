var app=angular.module('myMod', []);

app.controller('myCtrl', function($scope){

  $scope.items = [];

  $scope.addItem = function(item,) {
    $scope.items.push(item);
  };
});
