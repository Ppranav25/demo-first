let x= `hhkjhkjhk






jkjkhkhhjkhkj`

x=x.split("\n");
let y=[]
let flag=false;
for(let i=0;i<x.length;i++){
    if(x[i]==''){
        if(flag==false){
            y.push(x[i])
        }
        flag=true;
        continue;

    }else{
        
        y.push(x[i]);
    }
}
console.log(y)