const array=["fed",'fdf',"dfd"]
array.forEach(function (val){
    console.log(val)
})
array.forEach( (val)=>{
    console.log(val)
})
array.forEach( (val,item,arr)=>{
    console.log(val,item,arr)
})

const myCoding=[
    {
        language:'javascript',
        file:'js'
    },
    {
        language:'java',
        file:'java'
    },
    {
        language:'python',
        file:'py'
    }
]
myCoding.forEach((item) => {
    console.log(item.language)
});