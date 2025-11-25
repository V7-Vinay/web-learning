//generate a random color
const randomColor= function(){
    const hex="012456789ABCDEF"
    let color ='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
//console.log(randomColor());
let intervalid
const startchangeColor=function(){
     const  changebgcolor=function(){
         document.body.style.backgroundColor=randomColor();
    }
    if(!intervalid){
       intervalid= setInterval(changebgcolor,1000);
    }

   
}
const stopchangeColor=function(){
    clearInterval(intervalid);
    intervalid=null;
}

document.querySelector('#start').addEventListener('click',startchangeColor);
document.querySelector('#stop').addEventListener('click',stopchangeColor);
