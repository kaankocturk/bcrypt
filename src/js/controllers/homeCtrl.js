app.controller('homeCtrl', function($scope, $localStorage) {
  $scope.isAuthenticated = function(){
    return $localStorage.token;
  }
  console.log('homeCtrl');
});
