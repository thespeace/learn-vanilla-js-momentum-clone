const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HiDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const onLoginSubmit = (event) => {
    event.preventDefault();
    loginForm.classList.add(HiDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

const paintGreetings=(username)=>{
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HiDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HiDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}


const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img"); //element 생성
//
// bgImage.src = `${chosenImage}`;
// bgImage.style = "width: 100px; height: 100px;";

const bgImage = `url(${chosenImage})`

document.body.style.backgroundImage = bgImage;