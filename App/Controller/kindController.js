app.controller("kindController",["$scope","ajaxServer",function($scope,ajaxServer){
    ajaxServer.ajax("http://localhost:3000/data").then(function(result){
        $scope.data=result.data;
        console.log(result)
    })
}])