// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)
var counter =0;
function counterWithoutSetInterval()
{
    
    console.log(counter++);

   
    setTimeout(counterWithoutSetInterval,1000);
}
counterWithoutSetInterval();


