//function me(){
//console.log("Hello world")}

//me()

let btn = document.getElementById("nav-toggle");

btn.addEventListener("mouseover", function(){
    let bar = document.getElementById("icon1");
    let bar2 = document.getElementById("icon2");
    let bar3 = document.getElementById("icon3");
    let tog = document.getElementById("nav-toggle")
    tog.style.borderColor = "white";
    bar.style.backgroundColor = "white";
    bar2.style.backgroundColor = "white";
    bar3.style.backgroundColor = "white";
})
btn.addEventListener("mouseout", function(){
    let bar = document.getElementById("icon1");
    let bar2 = document.getElementById("icon2");
    let bar3 = document.getElementById("icon3");
    let tog = document.getElementById("nav-toggle")
    tog.style.borderColor = "black";
    bar.style.backgroundColor = "black";
    bar2.style.backgroundColor = "black";
    bar3.style.backgroundColor = "black";
})