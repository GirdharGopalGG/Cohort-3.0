const array = [2,3,5,6,7,7]

const double_array = array.map(arr=>{
    return arr*2}

)

console.log(array)
console.log(double_array)

const even_array = array.filter(arr=>{
    return arr%2==0
})

console.log(even_array)