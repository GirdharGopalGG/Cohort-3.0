const fs = require('fs')
const {Command} = require('commander')
const program = new Command();

program
    .name('counter')
    .description('cli to do file based tasks')
    .version('0.8.0')

program.command('count-words')
    .argument('<file>','file to count number of words')
    .action((file)=>{
        fs.readFile(file,'utf-8',(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                let count=0
                data=data.trim()
                data=data.replace(/\s+/g,' ')
                for(let i = 0;i<data.length;i++){
                    if(data[i]===' ')
                        count++
                }
                console.log(`${count+1} words in ${file} `)
            }
        })
    })


program.command('count-lines')
    .argument('<file>','file to count number of words')
    .action((file)=>{
        fs.readFile(file,'utf-8',(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                let count = data.split('\n').length
                console.log(`${file} has ${count} no. of lines`)
            }
        })
    })

program.parse(process.argv)