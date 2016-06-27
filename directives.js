var app= angular.module("myApp.directives", []);

app.directive("selectionDirective", function(){
        return{
            restrict: "AE",
            replace: true,
            templateUrl: "components/selection.html"
        }
    });

    app.directive("moviesDirective", function(){
        return{
            restrict: "AE",
            replace: true,
            templateUrl: "components/movies.html"
        }
    });

    app.directive("booksDirective", function(){
        return{
            restrict: "AE",
            replace: true,
            templateUrl: "components/books.html"
        }
    });

    app.directive("songsDirective", function(){
        return{
            restrict: "AE",
            replace: true,
            templateUrl: "components/songs.html"
        }
    });