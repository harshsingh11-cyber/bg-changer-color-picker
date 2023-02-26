// let red = document.getElementById("red");
// let green = document.getElementById("green");
// let blue = document.getElementById("blue");

let bg = document.getElementById("main");
let col = document.getElementById("color");

function myFunction(){
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    bg.style.backgroundColor = `rgb(${red},${green},${blue})`;
col.innerText= `RGB( ${red} , ${green} , ${blue} )`;
}
