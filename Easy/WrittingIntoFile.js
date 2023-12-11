// Write to a file
// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs')

// Specify the path to the file
const filePath ='C:/Users/shiv/Desktop/100xDevs/Week-2/File.txt';
const content='This content is added using JavaScript';

try{
    fs.writeFileSync(filePath,content,'utf-8')
    console.log('File has been written successfully!');
}
 catch(error){
    console.error("Error occured while writing into file ");
}