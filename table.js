document.addEventListener('DOMContentLoaded', () => {
    alert("Welcome, Vanilla Js World!");
})
/*
$(function(){
    $(".container .view").on("click", function(){
        alert("1");
    });
});
const calculator = {
    plus   : (a,b)=>a+b,
    minus  : (a,b)=>a-b,
    times  : (a,b)=>a*b,
    divide : (a,b)=>a/b,
    power  : (a,b)=>a**b
}*/
let rows = document.getElementsByTagName('td');
function moveDown(el){
    if(el.getElementsByTagName('td:first-child') && el.parentNode.nextElementSibling !== null){
        if(el.parentNode.nextElementSibling.style.display === 'none'){
            el.parentNode.nextElementSibling.style.display = '';
        }else{
            el.parentNode.nextElementSibling.style.display = 'none';
        }
    }else{
        alert("준비된 코드가 없습니다.");
    }
}