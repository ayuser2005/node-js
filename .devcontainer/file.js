const fs=require("fs");

//Sync.. call
//fs.writeFileSync("./test.txt","Hey there");

//Async
//fs.writeFile("./test.txt","Hello World Async", (err)=>{});

//const result=fs.readFileSync("./contact.txt","utf-8");
//console.log(result);

fs.appendFileSync("./test.txt",`${Date.now()}Hey There\n`);

//fs.cpSync("./test.txt","./copy.txt");
//fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./test.txt"));

fs.mkdirSync("my-docss/a/b",{recursive:true});
