

//var i=0;

//var m= 0;

//var z= 0;




(function(){

    var app= angular.module("myApp", ["ngRoute", "myApp.directives", "myApp.controllers"]);

    app.config(["$routeProvider", function($routeProvider){
        $routeProvider
            //.when("/home", {templateUrl: "components/selection.html", controller:"landingController"})
            .when("/movies", {templateUrl:"templates/mov.html", controller:"movieController"})
            .when("/books", {templateUrl:"templates/bok.html", controller:"bookController"})
            .when("/songs", {templateUrl:"templates/son.html", controller:"songsController"})
            .when("/location", {templateUrl:"templates/map.html", controller:"mapController"})
            .when("/book/location", {templateUrl:"templates/bookLocation.html", controller:"bookLocationController"})
            .when("/cine/location", {templateUrl:"templates/cineLocation.html", controller:"cineLocationController"})
            .when("/weeklyRecommendations", {templateUrl:"templates/weekly.html", controller:"weeklyRecController"})
    }]);

 

    

    

})();


