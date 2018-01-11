app.controller("main",function($scope){
    $scope.temp = true;
    $scope.sorttemp = true;
    $scope.classify = function(){
        $scope.temp =! $scope.temp
    }
    $scope.select = function(a){
        console.log(a)
        $scope.screen=a;
    }
    $scope.sort = function(){
        $scope.sorttemp=!$scope.sorttemp
    }
    $scope.pai = function(a){
        console.log(a)
        $scope.rank=a;
    }
})