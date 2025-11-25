const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results =document.querySelector('#results');
    const p =document.querySelector('#output');


    if(height<0 || isNaN(height)){
        results.innerHTML=" enter a valid height";
        p.innerHTML="";
    }else if(weight<0 || isNaN(weight)){
        results.innerHTML=" enter a valid weight";
        p.innerHTML="";
    }else{
        const bmi=((weight/(height*height))*10000).toFixed(2)
        results.innerHTML=`BMI : ${bmi}`
        if(bmi<18.6){
            p.innerHTML=" conclusion: under weight";
        }else if (bmi>=18.6&&bmi<=24.9){
            p.innerHTML=" conclusion: normal weight";
        }else{
            p.innerHTML=" conclusion: over weight";
        }
    }
});