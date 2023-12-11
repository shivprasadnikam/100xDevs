// // Reading the contents of a file
// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

const fs = require('fs');

// Specify the path to the file
const filePath='D:/fav/File.txt';

fs.readFile(filePath,'utf-8',(err,data)=>
{
    if(err)
    {
        console.error('Error reading the file: ${err.message}');
        return;
    }
    // Log the content of the file
    console.log('File Content:');
    console.log(data);
});





