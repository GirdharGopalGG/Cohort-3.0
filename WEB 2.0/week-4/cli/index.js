const fs = require('fs')

function main(filePath){
    fs.readFile(filePath, 'utf-8',(err,data)=>{
        let words = 0;
        data = data.trim()
        data = data.replace(/\s+/g,' ')

        for(let i=0;i<data.length;i++){
            if(data[i]===" "){
                words++
            }
        }
        console.log(words+1) 
    })
}

main(process.argv[2])