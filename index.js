// Disaster code sry
// I'm bad at back-end
const chatbotgreetings = [
    "How's it going?",
    "What's poppin",
    "What's up",
    "Greetings",
    "I'm Here",
    "What can i help you with?"
];

const newChat = document.getElementById("newChat");
const mySubmit = document.getElementById("mySubmit");
let onClickLogIn = document.getElementById("onClickLogIn");
const answer = document.getElementById("answer");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
let randomGreetingGenerator = 0;

function startChat(){
    let say = window.prompt("Say hello");
    if(say == ""){
        alert("Please Type in something!");
    }
    else if ( say == "hello"){
        randomGreetingGenerator = Math.floor(Math.random * chatbotgreetings.length);
        console.log(randomGreetingGenerator);
        answer2.innerText = chatbotgreetings[randomGreetingGenerator];
    }
}


function logIn(){
    let registeredName = window.prompt("Please Enter In a Name").trim();
    let registeredSurname = window.prompt("Please Enter In a Surname").trim();
    answer.textContent = registeredName;
    answer2.textContent = registeredSurname;
    
}


function signUp(){
    let registeredName = window.prompt("Please Enter In a Name").trim();
    let registeredSurname = window.prompt("Please Enter In a Surname").trim();
    answer.textContent = registeredName;
    answer2.textContent = registeredSurname;
}