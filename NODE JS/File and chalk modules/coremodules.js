const fs=require("fs");
const path=require("path");
console.log("READING FILE >>>>");
console.log("current directory : ",__dirname);
console.log("current directory : ",__filename);

var newpath = path.normalize(__dirname+"/..");
newpath=path.normalize(newpath+"/..");
console.log("New Path ",newpath);

var fullpath =  path.join(newpath,"/ANGULAR JS/SPA/views/aboutus.html");
console.log("Full Path ",fullpath);

var readablestream=fs.createReadStream(fullpath,{highWaterMark:20});
var writeablestream=fs.createWriteStream("test.txt");

//console.log("Data is ",readablestream);
readablestream.on("data",(chunk)=>{
     console.log("Data is "+chunk);
    // writeablestream.write(chunk);
})
readablestream.on("end",()=>{
    console.log("Data End ..");
})

console.log("CHUNK...");

//readablestream.pipe(process.stdout);
// readablestream.pipe(writeablestream);

//-------------------------READ WHOLE FILE IN ONE GO---------------------------------------

//so not suitable for reading large files
// fs.readFile("coremodules.js",{encoding:'UTF-8'},function(error,content){
//     if(error){
//         console.log("Can't read this file");
//     }
//     else{
//         console.log("Data is ",content);
//     }
// })

for(let i=1;i<=5;i++){
   console.log("doing some work...");
}