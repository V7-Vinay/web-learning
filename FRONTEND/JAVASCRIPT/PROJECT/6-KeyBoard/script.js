//
const output = document.getElementById("output");

const insert=document.getElementById('insert')
window.addEventListener("keydown",function(e){
let text=`
key:${e.key===" "?"space":e.key}<br>
keycode:${e.keyCode}<br>
code:${e.code}`;
output.innerHTML=text;

});
// default engine syncronous
//complete javascript environment asynronous