"use strict"
const prefBtn = document.querySelector(".pref_btn");
const sideMenu = document.querySelector(".menu-background");
const userInput = document.querySelectorAll(".timer")
const start = document.querySelector(".start-pause");
const reset = document.querySelector(".reset");
const timer = document.querySelector(".timer-display");



start.addEventListener("click", function(){

    if( userInput[0].value === "" && userInput[1].value === "" && userInput[2].value === ""){
        alert("invalid input")
    }else{
        reset.classList.toggle("hidden")
        start.classList.toggle("hidden")

        for(let i = 0; i < userInput.length; i++){
            userInput[i].setAttribute("readonly","");
            userInput[i].classList.toggle("active");
        }

        let hrs = parseInt(userInput[0].value === "" ? 0 : userInput[0].value);
        let min = parseInt(userInput[1].value === "" ? 0 : userInput[1].value);
        let sec = parseInt(userInput[2].value === "" ? 0 : userInput[2].value);

        const countdown = function(){

            userInput[0].value = hrs;
            userInput[1].value = min;
            userInput[2].value = sec;

            if(hrs === 0 && min === 0 && sec === 0){
                clearInterval(going)
                console.log("timer fin");
            }

            if(min === 0){
                if(hrs > 0){
                    hrs--;
                    min = 60;
                }
            }
            
            if(sec === 0){
                if(min > 0){
                    min--;
                    sec = 60;
                }
            }

            
            if(sec > 0){
                sec--;
            }
        
    }

    let going = setInterval(countdown,1000);

    reset.addEventListener("click", function(){
        clearInterval(going)
        userInput[0].value = 0;
        userInput[1].value = 0;
        userInput[2].value = 0;
        reset.classList.toggle("hidden")
        start.classList.toggle("hidden")
        for(let i = 0; i < userInput.length; i++){
            userInput[i].removeAttribute("readonly","");
            userInput[i].classList.toggle("active");
        }
    })

    }

})



prefBtn.addEventListener("click", function(){
    sideMenu.classList.toggle("open");
    

})

sideMenu.addEventListener("click", function(e){
    if(e.target === sideMenu){
        sideMenu.classList.toggle("open");
    }
})

timer.addEventListener("input", function(e){
    if(e.target.tagName === "INPUT"){
        console.log(e.target);
        validateInput(e.target);

    }
})

const validateInput = function(input){
    if (input.value < 0) input.value = 0;
    if (input.value > 59) input.value = 59;
}


