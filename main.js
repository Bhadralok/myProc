
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
    // function checkForValidity{

    // }
})

let reloadButton = document.getElementById("button1");
reloadButton.addEventListener("click" , function(){
    location.reload()
})

but_1.addEventListener("click", function() {
    but_1.style.backgroundColor = "hsl(25, 97%, 53%)";
    but_1.style.color = "white";
    let selectSectionFirst = document.getElementById("select");
    selectSectionFirst.innerHTML = 1;
    but_1.style.transition = "100ms"
    if (but_1.style.backgroundColor = "hsl(25, 97%, 53%)"){
        but_2.style.backgroundColor = "hsl(213, 19%, 18%)"        
        but_3.style.backgroundColor = "hsl(213, 19%, 18%)"        
        but_4.style.backgroundColor = "hsl(213, 19%, 18%)"        
        but_5.style.backgroundColor = "hsl(213, 19%, 18%)"        
    }
})
but_2.addEventListener("click", () => {
    but_2.style.backgroundColor = "hsl(25, 97%, 53%)";
    but_2.style.color = "white"
    let selectSectionSecond = document.getElementById("select");
    selectSectionSecond.innerHTML = 2;
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
    but_4.style.color = "white"
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
    but_5.style.color = "white"
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
// let firstDiv = 1;
// let displayFirstDiv = document.getElementById("div1");
// submitButton.addEventListener("click", function(){
//     document.getElementById("select").innerHTML = firstDiv;
//     if (displayFirstDiv.style.backgroundColor = "hsl(25, 97%, 53%)"){
//         console.log("yes");
//     } else {
//         console.log("no")
//     }
// })