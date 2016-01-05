
// Quotes about wastage of time
var timeQuotes = [
    "when you kill time, remember that it has no resurrection",
    "the trouble is, you think you have time",
    "time is what we want most, but what we use worst",
    "wasting your time is the subtlest form of suicide",
    "procrastination is the foundation of all disasters",
    "the bad news is time flies. the good news is you're the pilot",
    "you can manage your life by only your time",
    "it is not the time for you to dream, it is the time for you to accomplish the mission",
    "time is much more valuable than money",
    "if time were to take on human form, would she be your taskmaster or freedom fighter?",
    "lack of direction, not lack of time, is the problem. we all have twenty-four hour days",
    "if you spend too much time thinking about a thing, you&#8217;ll never get it done",
    "the best time to start was last year. failing that, today will do"
];

$(document).ready(function(){

    var randomQuote = timeQuotes[Math.floor(Math.random() * timeQuotes.length)];
        var trackerDisplay = document.getElementById("websites");
		var h1 = document.getElementsByTagName('time')[0];
		h1.textContent= localStorage.getItem("timing");
        trackerDisplay.innerHTML = randomQuote;
		setInterval(function(){ $("#timer").fadeToggle( "slow", "linear" ); }, 5);
		$(document).snowfall({deviceorientation : true, round : true, minSize: 3, maxSize:5,  flakeCount : 4});

    });
	


