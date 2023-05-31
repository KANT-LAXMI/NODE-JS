const fs=require('fs')

fs.writeFile('abc.txt','JAI SHREE RAM!!!!!!!!!!',function(err){
    if(err){
        console.log("ERR OCCURED CODE DEKH")
    }else{
        fs.readFile('abc.txt',function(err,data){
            if(err){
                console.log("FIR SE AA GAYA")
            }else{
                console.log(data.toString())
            }
        })
    }
})

console.log("welcome to WRITE FS")

fs.writeFileSync('abc.txt','HAR HAR MAHADEV!!!!!!!')
var a=fs.readFileSync('abc.txt')
console.log(a.toString());