document.addEventListener('DOMContentLoaded', () => {
    alert("Welcome, Vanilla Js World!");
})

function toggle(el){
    if(el.parentNode.nextElementSibling !== null){
        if(el.parentNode.nextElementSibling.style.display === 'none'){
            el.parentNode.nextElementSibling.style.display = '';
        }else{
            el.parentNode.nextElementSibling.style.display = 'none';
        }
    }else{
        alert("준비된 코드가 없습니다.");
    }
}

/*// 6
const sixEl = document.getElementById('sixEl');
const sixEvent = () => { sixEl.innerText = "Got your ID! (특정 ID.element 읽고, 변경)"; };

// 7
const sevenEl = document.getElementsByClassName("sevenClass");
console.log(sevenEl)
const sevenEvent = () => {
    for (let i = 0; i < sevenEl.length; i++) {
    sevenEl[i].innerText = "Got your className["+i+"]!";
}};*/


const clickSevenEl = () => { alert(document.querySelector("#sevenEl").innerHTML); }
document.querySelector("#sevenClick").addEventListener("click", clickSevenEl);

