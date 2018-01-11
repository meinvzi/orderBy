var app=angular.module("app",["ui.router"])
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("kind")
    $stateProvider
        .state("kind",{
            url:"/kind",
            templateUrl:"App/View/kind.html",
            controller:"kindController"
        })
})
