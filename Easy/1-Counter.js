// Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

/*
Ans-> So we need to create a function which starts after every one sec by using time

*/
var count =0;
console.log("Program Started !!!");
function counter(){
    console.log("Program Starting After Every One Second !!!");

  console.log(count++);

}
setInterval(counter,1000);
counter();
