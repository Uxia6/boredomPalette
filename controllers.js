var app= angular.module("myApp.controllers", []);


app.controller("weeklyRecController", function($scope, $http){

        $(".selectMe").fadeOut();
        $("body").attr("class", "backWeekly");
        $(".greetings").html("");


       $(".showMovie").on("click", function(){
            if ($(".weekCardMovie").hasClass("hide")) {
                $(".weekCardMovie").removeClass("hide");
            } else{
                $(".weekCardMovie").addClass("hide");
            }
        });

        $(".showBook").on("click", function(){
            if ($(".weekCardBook").hasClass("hide")) {
                $(".weekCardBook").removeClass("hide");
            } else{
                $(".weekCardBook").addClass("hide");
            }
        });

        $(".showMusic").on("click", function(){
            if ($(".weekCardMusic").hasClass("hide")) {
                $(".weekCardMusic").removeClass("hide");
            } else{
                $(".weekCardMusic").addClass("hide");
            }
        });

        var url= "data/weeks.json";

         $http.get(url).then(function(res){
            $scope.weeks= res.data;
         });

    });

    app.controller("landingController"), function(){

        $(".containMessage").hide();

    };

    app.controller("mapController", function($scope, $http){
            
            $(".selectMe").fadeOut();
            $("body").attr("class", "backLocation");
            $(".greetings").html("");

            var map= new google.maps.Map(document.getElementById("map"), {
                zoom: 11,
                center: new google.maps.LatLng(40.42, -3.7),
                mapTypeId: google.maps.MapTypeId.ROADMAP
         
            })

            var infowindow= new google.maps.InfoWindow();

            var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';


            var marker= new google.maps.Marker({
                position: new google.maps.LatLng(
                    40.461696, -3.689017),
                map: map,
                icon: iconBase + 'schools_maps.png'
            });

            google.maps.event.addListener(marker, "click", (function(marker){
                return function(){
                    infowindow.setContent("Paseo de la Castellana, 194, 28046 Madrid");
                    infowindow.open(map, marker);
                }
            })(marker));
    })

    app.controller("cineLocationController", function($scope, $http){
        
        var url="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.461688,%20-3.688781&radius=50000&types=movie_theater&key=AIzaSyBaVDH7fEtG1XiGL0k6xeZb-MLFHCwHlzM";

         var map= new google.maps.Map(document.getElementById("mapCine"), {
                    zoom: 12,
                    center: new google.maps.LatLng(40.461688, -3.688781),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
             
                });

        $http.get(url).then(function(res){
            console.log(res.data);
            var fullMapa= res.data.results;
            console.log(fullMapa);

            for(i=0; i<= fullMapa.length -1; i++){

                $scope.mapa= fullMapa[i];
                console.log($scope.mapa);
                var latitude= $scope.mapa.geometry.location.lat;
                console.log(latitude);
                var longitude= $scope.mapa.geometry.location.lng;
                console.log(longitude);
                var name= $scope.mapa.name;
                console.log(name);
                var where= $scope.mapa.vicinity;
                console.log(where);

                var infowindow= new google.maps.InfoWindow();

                var marker;

                marker= new google.maps.Marker({
                    position: new google.maps.LatLng(
                        latitude, longitude),
                    map: map
                });


                google.maps.event.addListener(marker, "click", (function(marker){
                return function(){
                    infowindow.setContent(name + "</br>" + where);
                    infowindow.open(map, marker);
                }
            })(marker));
            
            };
        })

    });

    app.controller("bookLocationController", function($scope, $http){
        
        var url="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.461688, -3.688781&radius=10000&types=book_store&key=AIzaSyBaVDH7fEtG1XiGL0k6xeZb-MLFHCwHlzM";

         var map= new google.maps.Map(document.getElementById("mapBooks"), {
                    zoom: 12,
                    center: new google.maps.LatLng(40.461688, -3.688781),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
             
                });

        $http.get(url).then(function(res){
            console.log(res.data);
            var fullMapa= res.data.results;
            console.log(fullMapa);

            for(i=0; i<= fullMapa.length-1; i++){

                $scope.mapa= fullMapa[i].geometry.location;
                console.log($scope.mapa);
                var latitude= $scope.mapa.lat;
                console.log(latitude);
                var longitude= $scope.mapa.lng;
                console.log(longitude);
                var name= fullMapa[i].name;
                console.log(name);

                var infowindow= new google.maps.InfoWindow();

                var marker;

                marker= new google.maps.Marker({
                    position: new google.maps.LatLng(
                        latitude, longitude),
                    map: map
                });


                google.maps.event.addListener(marker, "click", (function(marker){
                return function(){
                    infowindow.setContent(name);
                    infowindow.open(map, marker);
                }
            })(marker));
            
            };
        })

    });

    app.controller("songsController", function findMeMusic($scope, $http, $sce){
        var i=0;
        $scope.next= function(){
            
            i++;
            if(i>=19){
                i= 19;
            };
            console.log(i);
            localStorage.setItem("index", i);
            $scope.prueba();
        };

        $scope.prev= function(){
            i--;
            if(i<=0){
                i= 0;
            };
            console.log(i);
            localStorage.setItem("index", i);
            $scope.prueba();
        };

        $scope.prueba= function(){

        $(".selectMe").fadeOut();
        $("body").attr("class", "backSongs");
        $(".greetings").html("");
        var theyWrite = $(".theyWrite").val();

        if($(".theyWrite").val()==""){
            var theyWrite = "adele";            
        }


        var newI= localStorage.getItem("index", i) || 0;
        console.log(newI);

        
        var url="https://www.tastekid.com/api/similar?q=" + theyWrite + "&info=1&type=music&k=228643-BoredomP-N8LZTXTM";
        //var url2= "https://api.spotify.com/v1/search?type=artist&query=hello";
        //var url= "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&api_key=677b7b5fadc12924a474a0a96229a8df&artist=adele&format=json";

        $http.get(url).then(function(res){
               
            console.log(res.data);
            var songss = res.data;
            $scope.songs = songss.Similar.Results;
            console.log($scope.songs);
            console.log($scope.songs[0].Name);        

        var url2= "https://api.spotify.com/v1/search?type=track&q=" + $scope.songs[newI].Name;
        $sce.trustAsResourceUrl(url2);
        

        $http.get(url2).then(function (response){
            console.log(response.data);
            var songss2 = response.data;

            $scope.songs2= songss2.tracks.items;
            console.log(songss2.tracks.items);
            console.log($scope.songs2[0].artists[0].name);
            $scope.songs2First = songss2.tracks.items[0];
            console.log($scope.songs2First);

        })

        });
    };
    $scope.prueba();
    playSong();

    });


    app.controller("movieController", function($scope, $http){
        var m= 0;
        $scope.next= function(){
            
            m++;
            if(m>=19){
                m= 19;
            };
            console.log(m);
            localStorage.setItem("mindex", m);
            $scope.prueba();
        };

        $scope.prev= function(){
            m--;
            if(m<=0){
                m= 0;
            };
            console.log(i);
            localStorage.setItem("mindex", m);
            $scope.prueba();
        };
        

        $scope.prueba= function(){

        $(".selectMe").fadeOut();
        $("body").attr("class", "backCinemas");
        $(".greetings").html("");
        var theyWrite2 = $(".theyWrite2").val();
        console.log(theyWrite2);
        

        if($(".theyWrite2").val()==""){
            var theyWrite2 = "titanic";            
        };

        var newI= localStorage.getItem("mindex", m) || 0;
        console.log(newI);
     

        var url1="https://www.tastekid.com/api/similar?q=" + theyWrite2 + "&info=1&type=movies&k=228643-BoredomP-N8LZTXTM";
        $http.get(url1).then(function(res){


            console.log(res.data);
            var cinemass = res.data;
            $scope.cinemas = cinemass.Similar.Results;

            console.log($scope.cinemas);
            console.log($scope.cinemas[0].Name);
        

        var url= "http://www.omdbapi.com/?t=" + $scope.cinemas[newI].Name;;
        $http.get(url).then(function(res){
            console.log(res.data);
            $scope.cinemas2 = res.data
        })

        

        });
        }; $scope.prueba();

        
    });

    app.controller("bookController", function($scope, $http){
        var z= 0;
        $scope.next= function(){
            
            z++;
            if(z>=19){
                z= 19;
            };
            console.log(z);
            localStorage.setItem("zindex", z);
            $scope.prueba();
        };

        $scope.prev= function(){
            z--;
            if(z<=0){
                z= 0;
            };
            console.log(z);
            localStorage.setItem("zindex", z);
            $scope.prueba();
        }

        $scope.prueba= function(){

        $(".selectMe").fadeOut();
        $("body").attr("class", "backBooks");
        $(".greetings").html("");
        var theyWrite3 = $(".theyWrite3").val();
        console.log(theyWrite3);

        if($(".theyWrite3").val()==""){
            var theyWrite3 = "orgullo y prejuicio";            
        };

        var newI= localStorage.getItem("zindex", z) || 0;
        console.log(newI);

        var url1="https://www.tastekid.com/api/similar?q=" + theyWrite3 + "&info=1&type=books&k=228643-BoredomP-N8LZTXTM";
        
        $http.get(url1).then(function(res){
            console.log(res.data);
            var bookss = res.data;
            $scope.books = bookss.Similar.Results;
            console.log($scope.books);
            console.log($scope.books[0].Name);

            var url="https://www.googleapis.com/books/v1/volumes?q=" + $scope.books[newI].Name + "&filter=paid-ebooks&printType=books&projection=full&maxResults=40";
            //var url= "https://www.googleapis.com/books/v1/volumes?q=twilight";
            $http.get(url).then(function(res){
                //console.log(res.data);
                var bookss2 = res.data;
                console.log(bookss2);
                $scope.books2 = bookss2.items
                console.log(bookss2.items);
                console.log(bookss2.items[17].searchInfo.textSnippet);
                var test= bookss2.items[17].searchInfo.textSnippet.replace(/[\\<br>\\</br>]/g, "");
                console.log(test);

            })
        });
        };$scope.prueba();
    });