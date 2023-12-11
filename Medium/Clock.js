// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)



function clock(){
const date = new Date();
const hours = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
// Format the time as HH:MM:SS
const formattedTime = `${hours}:${min}:${sec}`;

    console.log("Current Time : "+formattedTime);
}
setInterval(clock,1000)