const crypto = require ('crypto')

// const input = 'GG'
// const hash = crypto.createHash('sha256').update(input).digest('hex')
// console.log(hash)

let input = 0
while(true){
    inputStr='1'+input.toString()+'hi'
    let hash = crypto.createHash('sha256').update(inputStr).digest('hex')
    if(hash.toString().startsWith('0000')){
        console.log(inputStr+' -> '+hash)
        return
    }
    else
        input++;
}