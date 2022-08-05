"use strict";

const id = dcoument.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

logintBtn.addEventListner("click", login);

function login(){
    const req = {
        id: id.value, 
        psword: psword.value,
    };

    fetch("/login",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
}
