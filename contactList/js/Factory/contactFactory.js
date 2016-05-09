angular.module("app")

.factory("contactFac", contactFactory);

var contacts = [];

function contactFactory() {
    
    return contacts;
}