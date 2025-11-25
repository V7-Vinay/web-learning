const buttons = document.querySelectorAll('.div button')
console.log(buttons)
const body =document.querySelector('body')
buttons.forEach(function (butt){
    console.log(butt)
    butt.addEventListener('click',function(event){
        console.log(event)
        console.log(event.target)
        switch(event.target.id){
            case 'red': 
                 body.style.backgroundColor= 'red';
                 break;
            case 'green': 
                 body.style.backgroundColor= 'green';
                 break;
            case 'pink':
                 body.style.backgroundColor= 'pink'
                 break;
            case 'brown':
                 body.style.backgroundColor= 'brown'
                 break;
            case 'yellow': 
                 body.style.backgroundColor= event.target.id
                break;  
            
        }
 
    })
});