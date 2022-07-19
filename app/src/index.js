const open = document.querySelector(".faq-question");
const answer = document.querySelector(".faq-answer");
const close = document.querySelector("svg-icon")

function init(){
    open.addEventListener("click",function(){
        answer.classList.remove("closed");


    });
    close.addEventListener("click",function(){
        answer.classList.add("closed");
    });
}
init();