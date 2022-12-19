const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const onLoginSubmit = (event)=>{
    console.log(event);// event object는 preventDefault함수를 기본적으로 갖고 있음
    event.preventDefault();// 브라우저가 기본 동작을 실행하지 못하게 막기
}

loginForm.addEventListener("submit", onLoginSubmit);

const link = document.querySelector("a");
const handleLinkClick = (event) =>{
    event.preventDefault();
    console.log(event);
}
link.addEventListener("click", handleLinkClick); //내가 하는게 아니라 브라우저가 해주는 것, 해당 이벤트를 막고싶다면 preventDefault();
