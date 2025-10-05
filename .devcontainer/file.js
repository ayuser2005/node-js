const fs=require("fs");

//Sync.. call
//fs.writeFileSync("./test.txt","Hey there");

//Async
fs.writeFile("./test.txt","Hello World Async", (err)=>{});

//const result=fs.readFileSync("./contact.txt","utf-8");
//console.log(result);