
let but_1 = document.getElementById("div1");
let but_2 = document.getElementById("div-2");
let but_3 = document.getElementById("div-3");
let but_4 = document.getElementById("div-4");
let but_5 = document.getElementById("div-5");
let spanSelect = document.getElementById("select");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(){
    let changeColor = document.getElementById("main-div-1");
    changeColor.style.display = "none";
    let changeDisplay = document.getElementById("main-div-2");
    changeDisplay.style.display = "flex"
})


const reloadButton = document.getElementById("button1");
reloadButton.addEventListener("click" , function(){
    location.reload()
})

let buttonClicked = false;

but_1.addEventListener("click", function() {
    but_1.style.backgroundColor = "hsl(25, 97%, 53%)";
    but_1.style.color = "white";
    let selectSectionFirst = document.getElementById("select");
    selectSectionFirst.innerHTML = 1;
    but_1.style.transition = "100ms";
    buttonClicked = true;
    if (but_1.style.backgroundColor = "hsl(25, 97%, 53%)"){
        but_2.style.backgroundColor = "hsl(213, 19%, 18%)"        
        but_3.style.backgroundColor = "hsl(213, 19%, 18%)"        
        but_4.style.backgroundColor = "hsl(213, 19%, 18%)"        
        but_5.style.backgroundColor = "hsl(213, 19%, 18%)"        
    }
    let firstButton = 1;
    return firstButton;
})

but_2.addEventListener("click", () => {
    but_2.style.backgroundColor = "hsl(25, 97%, 53%)";
    but_2.style.color = "white"
    let selectSectionSecond = document.getElementById("select");
    selectSectionSecond.innerHTML = 2;
    buttonClicked = true;
    but_2.style.transition = "100ms"
    if (but_2.style.backgroundColor = "hsl(25, 97%, 53%)"){
        but_1.style.backgroundColor = "hsl(213, 19%, 18%)"
        but_3.style.backgroundColor = "hsl(213, 19%, 18%)"
        but_4.style.backgroundColor = "hsl(213, 19%, 18%)"
        but_5.style.backgroundColor = "hsl(213, 19%, 18%)"
    }
})
but_3.addEventListener("click", () => {
    but_3.style.backgroundColor = "hsl(25, 97%, 53%)";
    but_3.style.color = "white"
    buttonClicked = true;
    let selectSectionThird = document.getElementById("select");
    selectSectionThird.innerHTML = 3;
    but_3.style.transition = "100ms"
    if (but_3.style.backgroundColor = "hsl(25, 97%, 53%)"){
        but_1.style.backgroundColor = "hsl(213, 19%, 18%)"
        but_2.style.backgroundColor = "hsl(213, 19%, 18%)"
        but_4.style.backgroundColor = "hsl(213, 19%, 18%)"
        but_5.style.backgroundColor = "hsl(213, 19%, 18%)"
    }
})
but_4.addEventListener("click", () => {
    but_4.style.backgroundColor = "hsl(25, 97%, 53%)";
    but_4.style.color = "white";
    buttonClicked = true;
    let selectSectionFourth = document.getElementById("select");
    selectSectionFourth.innerHTML = 4;
    but_4.style.transition = "100ms"
    if (but_4.style.backgroundColor = "hsl(25, 97%, 53%)"){
        but_1.style.backgroundColor = "hsl(213, 19%, 18%)"
        but_2.style.backgroundColor = "hsl(213, 19%, 18%)"
        but_3.style.backgroundColor = "hsl(213, 19%, 18%)"
        but_5.style.backgroundColor = "hsl(213, 19%, 18%)"
    }
})
but_5.addEventListener("click", () => {
    but_5.style.backgroundColor = "hsl(25, 97%, 53%)";
    but_5.style.color = "white";
    buttonClicked = true;
    let selectSectionFifth = document.getElementById("select");
    selectSectionFifth.innerHTML = 5;
    but_5.style.transition = "100ms"
    if (but_5.style.backgroundColor = "hsl(25, 97%, 53%)"){
        but_1.style.backgroundColor = "hsl(213, 19%, 18%)"
        but_2.style.backgroundColor = "hsl(213, 19%, 18%)"
        but_3.style.backgroundColor = "hsl(213, 19%, 18%)"
        but_4.style.backgroundColor = "hsl(213, 19%, 18%)"
    }
})
let disabledButton = document.getElementById("Update");
disabledButton.style.display = "none"
submitButton.addEventListener("click", function(){
    if (!buttonClicked){
        let displayUp = document.getElementById("Update");
        displayUp.style.display = "flex";
        let mainDiv = document.getElementById("main-div-1");
        mainDiv.style.display = "none"
        let mainDiv2 = document.getElementById("main-div-2");
        mainDiv2.style.display = "none"
    }
})
const newButton = document.getElementById("button2");
newButton.addEventListener("click" , function(){
    location.reload()
})