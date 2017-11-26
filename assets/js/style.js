//word animation help source: https://stackoverflow.com/questions/15191058/css-rotation-cross-browser-with-jquery-animate

$(document).ready(function(){

	const WEBSITES = ["https://www.youtube.com/watch?v=yBLdQ1a4-JI", "http://robinwords.com/game/", "https://findtheinvisiblecow.com/", 
	"https://www.homestyler.com/", "http://www.windowsofnewyork.com/", "https://www.youtube.com/watch?v=MQ5ziNOtoMU", "https://littlealchemy.com/",
	"http://kimcartoon.me/Cartoon/World-of-Tomorrow/Movie", "http://mentalfloss.com/amazingfactgenerator/", "https://line-of-action.com/",
	"https://mynoise.net/NoiseMachines/rainNoiseGenerator.php", "https://www.youtube.com/watch?v=YeAjOimUHOU", "https://www.cryptokitties.co/",
	"https://www.google.com/earth/", "http://www.mangahere.co/manga/sunny_matsumoto_taiyou/c001/2.html"];
	//website order: stress, procrastinate, listen, personalize, design, watch, create, philosophize, learn, draw, sleep, cry, invest, explore
	const WORDS = ["stress", "procrastinate", "listen", "personalize", "design", "watch", "create", "philosophize", "learn", "draw", "sleep", "cry", "invest", "explore", "read"];
	let i = 0;

	$("#cat").click(function() { //jQuery Function Number 1
		document.getElementById("cat").src="../assets/img/luckycatgif.gif";//make cat move
		setTimeout(function() {
			document.getElementById("cat").src="../assets/img/luckycatgif.png";}, 2600);
		if (i>=14) {
			i = -1;
		}
		setTimeout(function() {
			$("#word").fadeOut();//jQuery Function Number 2
		}, 1200);
		setTimeout(function() {//change word
			$("#word").fadeIn();//jQuery Function Number 3
			$("#word").html(WORDS[i]);//4
			//animateIn("#word");
			$("#website").attr("href", WEBSITES[i]); //jQuery Function Number 5
			}, 1500); 
		i++;
	});

	//animate function screws with gif for some reason
	/*function animateIn(elem) {
		$({deg: 0}).animate({deg: 360}, {
			duration: 1900,
			step: function(now) {
				$(elem).css({
					transform: 'rotateX(' + now + 'deg)',
					transformStyle: "preserve-3d"
				});
			}
		});
	}*/

	$("#word").hover(function() { //4
		$(this).css("text-decoration", "underline");//jQuery Function Number 6
    	}, function(){
    	$(this).css("text-decoration", "none");
	});

})