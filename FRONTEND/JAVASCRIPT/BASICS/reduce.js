// const mynums= [1,2,3,4,5,6,7,8,9]
// // const newNums= mynums.map((num)=>num+10)
// const newNums= mynums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
// console.log(newNums)

const myNums=[1,2,3]
const total =myNums.reduce(function (acc,cv)
{
    console.log(`acc:${acc} and cv : ${cv} `)
    return acc+cv

},10)
let f=0
const ftoal=myNums.forEach((num)=>{
    f=f+num
    return f
})
console.log(`foreeach::${f}`)
console.log(total)

const shoppingCard =[
    {
        cname:'java script',
        price:299
    },
    {
        cname:'java ',
        price:2999
    },
    {
        cname:'python',
        price:1299
    },
]
const ans=shoppingCard.reduce((acc,cv)=> acc+cv.price,0)
console.log(ans)