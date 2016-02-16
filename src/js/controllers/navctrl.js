app.controller('navctrl', function($scope, Auth, $state, $localStorage) {
  $scope.isAuthenticated = function(){
    return $localStorage.token;
  }
  $scope.logout = function(){
    Auth.logout();
    $state.go('home');
  }
});
