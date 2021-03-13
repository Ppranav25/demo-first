
#!/usr/bin/env node
let fs= require('fs');
let cmd= process.argv.slice(2);
let options=[]
let files=[]
let str= ``;
(function(){
for(let i=0;i<cmd.length;i++){
    if(cmd[i].startsWith("-")){
        options.push(cmd[i])
    }else{
        files.push(cmd[i])
    }
}
for(let j=0;j<files.length;j++){
    if(fs.existsSync(files[j])){ 
        str= str+ fs.readFileSync(files[j]).toString()
    }else{
        console.log("invalid file")
        return
        
    }
}
str= str.split("\n");
if(options.includes("-s")){
    str= removeLargeSpaces(str)
}
str= str.join("\n");

//console.log(options)
//console.log(files)
console.log(str)
})();

function removeLargeSpaces(arr){
    let y=[]
let flag=false;
for(let i=0;i<arr.length;i++){
    if(arr[i]==''||arr[i]=="\r"){
        if(flag==false){
            y.push(arr[i])
        }
        flag=true;
        continue;

    }else{
        
        y.push(arr[i]);
    }
}
arr=y;
return arr
}
