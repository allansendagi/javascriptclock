const wakeUpTime = 7;
const lunchTime = 12;
const noon = 12; 
const naptime = lunchTime + 2;
let partyTime;
const evening = 18;

// Getting it to show the current time on the page
const showCurrentTime = () => {

	 // display the string on the webpage
	const clock = getElementById('clock');
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

     clock.innerText = clockTime;
}

// Getting the clock to increment on its own and change out messages and pictures

const updateClock = function() {
    let time = new Date().getHours();
    let messageText;
    let image = "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    let timeEventJS = document.getElementById("timeEvent");
    let lolcatImageJS = document.getElementById('lolcatImage');

    if (time===partyTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's party!";
    }  
    else if (time ===lunchTime) {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
      messageText = "Let's have some lunch!";
    }
    else if (time == napTime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }
  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;

    showCurrentTime();
};
    updateClock();

  // Getting the clock to increment once a second
  let oneSecond = 1000;
  setInterval( updateClock, oneSecond);

// Getting the Party Time Button To Work
let partyButton = document.getElementById("partyTimeButton");

const partyEvent = function() {
  if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
     else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};
partyButton.addEventListener("click", partyEvent);
partyEvent(); 

// Activates Wake-Up selector
const wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
const wakeUpEvent = function () {
      wakeuptime = wakeUpTimeSelector.value;
}
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates Lunch selector
const lunchTimeSelector =  document.getElementById("lunchTimeSelector");
const lunchEvent = function() {
      lunchTime = LunchTimeSelector.value;
}; 

LunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Nap-Time selector
const napTimeSelector =  document.getElementById("napTimeSelector");

const napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);






























