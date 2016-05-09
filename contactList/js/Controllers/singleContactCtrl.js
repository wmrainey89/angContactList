angular.module("app")

.controller("singleContactCtrl", singleContactController);

singleContactController.$inject = ["$scope", "$location", "contactFac"];

function singleContactController($scope, $location, contactFac){
    $scope.mainPage = function() {
        $location.path("/");
    }    
};