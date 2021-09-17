"use strict"
const prefBtn = document.querySelector(".pref_btn");
const sideMenu = document.querySelector(".menu-background");


prefBtn.addEventListener("click", function(){
    sideMenu.classList.toggle("open");
})

sideMenu.addEventListener("click", function(e){
    if(e.target === sideMenu){
        sideMenu.classList.toggle("open");
    }
})