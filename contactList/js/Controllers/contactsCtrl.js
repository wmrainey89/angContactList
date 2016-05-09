angular.module("app")

.controller("contactsCtrl", contactsController);

contactsController.$inject = ["$scope", "$location", "contactFac"];

function contactsController($scope, $location, contactFac){
    $scope.addContact = function() {
        contactFac.push(contacts);
            console.log("yay");
            // location.path("/");
                
    };
    
    $scope.viewContact = function() {
        $location.path("/singleContact");
    }
    
    // contactFac.query().$promise.then(function(lists) {
    //     $scope.contactLists  = lists;
    // });
};