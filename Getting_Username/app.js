// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME =  "hidden"; //string형태 담는 변수는 대문자 표기, 중요한 정보 담는게 아니라서 대문자로 표현

function onLoginSubmit(event){
    event.preventDefault();  //브라우저가 기본 동작 실행을 막는 함수, 여기서는 새로고침을 막기 위해 사용
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`; //greeting.innerText = "Hello "+ username;

    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);