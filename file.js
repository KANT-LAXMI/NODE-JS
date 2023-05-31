const fs=require('fs')

fs.readFile('degree.html',function(err,data){
    if(err){
        console.log("error occured :"+err);
    }else{
        console.log(data.toString());
    }
})

fs.readFile('classes.html',function(err,data){
    if(err){
        console.log("Error occured :"+err)
    }else{
        console.log(data.toString());////
    }
})

console.log("AAO MAJE KAREEE")
var qwerty=fs.readFileSync('test.txt')
console.log(qwerty.toString)
console.log("MAJA AAYA NAAAAA!!!!!!!!!!!!!!!!!!!!")