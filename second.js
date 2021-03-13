#!/usr/bin/env node
let fs= require('fs');
let cmd= process.argv.slice(2);
let options=[]
let files=[]
//let str=`abcd



//vftg

//vddde`
let str=  fs.readFileSync("f2.txt").toString()

for(let i=0;i<cmd.length;i++){
    if(cmd[i].startsWith("-")){
        options.push(cmd[i])
    }else{
        files.push(cmd[i])
      }
}


console.log(options)
console.log(files)


let count=""
for(let i=0; i<options.length;i++){
 if(options[i]=='-b'||options[i]=='-n'){
     count= count+options[i]
     break;
 }

}
str= str.split("\n");
console.log(count)
if(count=='-n'){
  
  for(let i=0; i<str.length;i++){
      str[i]= (i+1)+"."+str[i]
  }

  str=str.join("\n")
}

let count2=1;
if(count=='-b'){
for(let i=0;i<str.length;i++){

    if(str[i].length!=1){
        str[i]= count2+" "+ str[i]
        count2++
    }
   
}
str=str.join("\n")
}

console.log(str);