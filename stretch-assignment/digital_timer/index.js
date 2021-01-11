
//declerations



let count = 0;
//functions
let msTens = document.querySelector('#msTens');
let msHundreds = document.querySelector('#msHundreds');

clearInterval(function(){
    for (i = 0; i < 10; i++){
        msTens = i;
        if (msTens === 10){
            msTens.style.color = "red";
        }
    }
}, 1000);
