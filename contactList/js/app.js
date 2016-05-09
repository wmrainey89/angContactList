angular.module("app", ["ngRoute"])

.config(["$routeProvider", function($routeProvider){
    
    $routeProvider
    
    .when("/",{
        templateUrl: "views/contacts.html",
        controller: "contactsCtrl"
    })
    
    .when("/singleContact", {
        templateUrl: "views/singleContact.html",
        controller: "singleContactCtrl"
    })
    
    .otherwise({
        redirectTo: "/"
    })
}]);