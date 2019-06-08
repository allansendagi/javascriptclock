// const wakeUpTime = 7;
// const lunchTime = 12;
// const napTime = lunchTime + 2;
const noon = 12;
const evening = 18;
const partyTime='';

// Getting it to show the current time on the page
const showCurrentTime = function() {
   // display the string on the webpage
   const clock = document.getElementById('clock');
   const currentTime = new Date();

   let hours = currentTime.getHours();
   let minutes = currentTime.getMinutes();
   let seconds = currentTime.getSeconds();
   let meridian = 'AM';

    // Set hours
    if (hours >= noon)
	  {
		  meridian = "PM";
	  }
	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
	      // Set Minutes
	   if (minutes < 10)
	   {
	      minutes = "0" + minutes;
	   }
	   // Set Seconds
	   if (seconds < 10)
       {
        seconds = "0" + seconds;
       }
 	   // put together the string that displays the time
 	    const clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;
 	    clock.innerText = clockTime;

}
showCurrentTime();
