//Task 1
const checkbox = document.getElementById("toggleHide");
checkbox.addEventListener("click", togglePassword);

function togglePassword() {
    let input = document.getElementById("input");
    input.type = (input.type === "text") ? "password" : "text";
}



//Task 2
const toggleSubmit= document.getElementById("toggleSubmit");
toggleSubmit.addEventListener("click", toggleDisabled)

function toggleDisabled(){
    let btn = document.getElementById("submit")
    btn.toggleAttribute("disabled")
}

//Task 3
const scrollTop = document.getElementById("topBtn");
scrollTop.addEventListener("click",toTop);

function toTop() {
    $(window).scrollTop(0);
}
//Task 4
$('body').css('background-image', 'url(images/bg.jpeg)')

//Task 5
//couldn't make it
const text = document.getElementById("textarea");
text.addEventListener("input", updateCount)

function updateCount(){}


//Taks 6

const par = document.getElementById("fadeParagraph")
par.addEventListener("click", fade)

function fade(){
    $('#fadeParagraph').animate({ opacity: 0 }, 1000);
}


//Task 7

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", animate);

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", reset);

function animate(){
    $('#box').animate({width: 200, height:200}, 1000)
}

function reset(){
    $('#box').animate({width: 100, height:100}, 500)
}