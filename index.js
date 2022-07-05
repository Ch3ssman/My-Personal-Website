let email = document.querySelector("#users-email")
let subject = document.querySelector("#users-subject")
let message = document.querySelector("#users-message")

function contactMe() {
    console.log("This is the users email: " + email.value)
    console.log("This is the users subject: " + subject.value)
    console.log("This is the users message: " + message.value)
    if (email.value === '') {
        window.alert("Please enter an email address")
    } else if (subject.value === '') {
        window.alert("Please enter a subject")
    } else if (message.value === '') {
        window.alert("It would be nice if you left a message")
    }
    email.value = ''
    subject.value = ''
    message.value = ''
}

let mainMenu = document.querySelector("#main-menu")

function navbar() {
    if (mainMenu.style.height === '55px') {
        mainMenu.style.height = '430px'
    } 
    else {
        mainMenu.style.height = '55px'
        console.log("main-menu height was increased!")
    }
}

let linkBar = document.querySelector(".navbar")

linkBar.addEventListener("click", function() {
    mainMenu.style.height = '55px'
    console.log("A link to another page was clicked!")
})

let header = document.querySelector("#header-heading")

function blink() {
    var f = document.getElementById('header-heading');
    setInterval(function() {
       f.style.border = (f.style.border == 'none' ? '' : 'none');
    }, 440);
 }

function changeColor() {
    
}