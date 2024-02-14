//var deadline = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000); /*new Date(): current date and time; Date.parse(): returns the number of milliseconds since January 1, 1970, 00:00:00 UTC*/
// initializeClock();
var deadline;

function initializeClock() {
	var clock = document.getElementById("clockdiv");
	var daysSpan = clock.querySelector('.days'); /* select the days class within the clock class*/
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');
	
	//updateClock();
	var timeinterval = setInterval(updateClock, 1000); /*setInterval(): repeatedly calls a function or executes a code snippet*/
	//deadline = new Date(Date.parse(new Date()) + second*1000);

	function updateClock() {
		var t = getTimeRemaining(deadline);
		
		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2); /* get the last 2 characters*/
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.value= ('0' + t.seconds).slice(-2);    
		
		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}
	
}


function getTimeRemaining(endtime) {
	//var t = Date.parse(endtime) - Date.parse(new Date());
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	 return {
	 	'total': t,
	 	'days': days,
	 	'hours': hours,
	 	'minutes': minutes,
	 	'seconds': seconds
	 };
}

var timeinterval;

function startCountDown(){
    initializeClock();

    let button = document.getElementById("btn");

    if(button.innerText == "Start"){
        button.innerHTML = "Stop";
    
        var second = parseInt(document.getElementById("second").value);
        deadline = new Date(Date.parse(new Date()) + second * 1000);



        initializeClock();
    }else{
        //stop timer
        button.innerHTML = "Start";
        clearInterval(timeinterval);
    }

}