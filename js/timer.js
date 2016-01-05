var h1 = document.getElementsByTagName('time')[0],
    seconds, time,
    t;

chrome.runtime.onInstalled.addListener(function(details){
	if(details.reason == "install"){
		seconds = 0;
		// Check browser support
      if (typeof(Storage) !== "undefined") {
     // Store
      localStorage.setItem("secs", seconds);
    } 
		
	}
});
	
function add() {
	
	
     // Retrieve	
	seconds = localStorage.getItem("secs");
	
    seconds++;
	localStorage.setItem("secs", seconds);
    
    //h1.textContent= getReadableTime(seconds) ;
    
	time = getReadableTime(seconds) ;
	
	localStorage.setItem("timing",time);
	
	
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();

/*
* Function : getReadableTime();
* Usage : var readableTime = getReadableTime(2000);
* --------------------------------------------------
* This function takes in the number of seconds as arguments and then
* converts those number of seconds into hours and minutes respectively
* and returns a string that holds the proper time in the format of '3 hours 45 minutes and 3 seconds'
*/
function getReadableTime(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = (Math.floor(totalSeconds/60))%60;
    var hours = (Math.floor(totalSeconds/3600));
    var readableTime = '';
    if (hours > 1) 
        readableTime += hours + ' hours ';
    else if(hours == 1)
        readableTime += hours + ' hour '
    if (minutes > 1)
        readableTime += minutes + ' minutes and ' ;
    else if(minutes == 1)
        readableTime += minutes + ' minute and '
    if(seconds == 1){
        readableTime += seconds + ' second ';
    }else{
        readableTime += seconds + ' seconds ';
    }
    return readableTime;
}

