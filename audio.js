function change(){
    window.location.href="#movies";
};

function change2(){
    window.location.href="#books"
};

function change3(){
    window.location.href="#songs"
};


function playSong(){


	$(".tryTrack").remove();
	
	$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/search?type=track&limit=1&q=" + $(".title").html(),
			success: function(data){

				$(".forAudio").append("<audio controls class='tryTrack'></audio>");
				console.log($(".title").html());
				var track = data.tracks.items[0];
		
					$(".tryTrack").prop("src", track.preview_url);
				
			},
			error: function(){
				console.error("Oh no!");
			}
		});
};


function playTrailer(){


	//$(".tryTrailer").remove();
	
	$.ajax({
			type: "GET",
			url:"http://trailersapi.com/trailers.json?movie=" + $(".movieTitle").html() + "&limit=1&width=320",
			//url: "https://www.tastekid.com/api/similar?q=" + $(".movieTitle").html() + "&info=1&type=movies&k=228643-BoredomP-N8LZTXTM",
			//withCredentials: false,
			allowCredentials: 0,
			CrossOrigin: false,
			success: function(data){
				console.log(data[0].code);

				console.log($(".movieTitle").html());
				$(".forTrailer").append(data[0].code);

	
					//$(".tryTrailer").prop("src", data.Similar.Results[0].yUrl);
					//console.log(data.Similar.Results[0].yUrl);

			},
			error: function(){
				console.error("Oh no!");
			}
		});
};