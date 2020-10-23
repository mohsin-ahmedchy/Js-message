let messageIn = document.querySelector("#messageIn");
let sendBtn = document.querySelector("#sendBtn");
let messageOut = document.querySelector("#messageOut");


sendBtn.addEventListener("click",() =>{
    let text = messageIn.value;

    if(text === " "){
        alert("Input field is empty.")
    }
    else{
        messageOut.innerHTML = text;
        messageIn.value = " ";
    }
})