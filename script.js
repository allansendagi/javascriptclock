const wakeUpTime = 7;
const lunchTime = 12;
const noon = 12; 
const napTime = lunchTime + 2;
let partyTime;
const evening = 18;

// Getting it to show the current time on the page
const showCurrentTime = () => {

	 // display the string on the webpage
	let clock = getElementById('clock');
	let currentTime = new Date();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();
	let meridian = 'Am';

	    // Set hours
	if (hours >= noon) {
		meridian = 'PM';
	}
	if (hours > noon) {
		hours = hours - 12;
	}
	    // Set Minutes
	    if (minutes < 10) {
	    	minutes = '0' + seconds;
	    }
    // put together the string that displays the time
     const clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";


}