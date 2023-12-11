/*
Read a file, remove all the extra spaces and write it back to the same file.
hello     world    my    name   is       raman
hello world my name is raman

For example, if the file input was

*/

const fs = require('fs');
const filePath ='C:/Users/shiv/Desktop/100xDevs/Week-2/File.txt';

// first read file and store data then write data using .trim()

// Reading file
fs.readFile(filePath,'utf8',(err,data)=>
{
    console.log("Before");
    
    if(err)
    {
        console.log("Error Occured while reading file ");
    }
    else{
        
        console.log(data)
    }
   
    const content=data.replace(/\s+/g, ' ');
    try{
        fs.writeFileSync(filePath,content)
        {
            console.log("After");
            console.log(content);
        }
    }
    catch(err)
    {
        console.error("Error occured while writting content")
    }
  
});







