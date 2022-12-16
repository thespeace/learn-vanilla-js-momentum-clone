/*data type*/

const ConstantString = "text";

let changeableinteger = 0;

const boolean1 = true;
const boolean2 = false;

const empty = null;

let insideIsNothing;
insideIsNothing = undefined;

const variable = "변수 추가";
const arrayOrList = [0, "text", true, false, null, undefined, variable];
arrayOrList.push("addItem")

const variablesTypeRule = 'Always "const", sometimes "let", "var" never!';

const Object = {
  property1 : "item1",
  function : function(){

  }
};
Object.property = "ChangeItem1";
Object.newProperty = "addNewItem";

function function1(argument1, argument2) {
    console.log(argument1 + argument2); /*function's body*/
}
function1(5, 10);

const calculator = {
    plus   : (a,b)=>a+b,
    minus  : (a,b)=>a-b,
    times  : (a,b)=>a*b,
    divide : (a,b)=>a/b,
    power  : (a,b)=>a**b
}

const plusResult = calculator.plus(1,2);
alert(plusResult);
/*const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0){
    alert("Please write a real positive number..");
}else if(age === 8){
    alert("Go to Elementary School!");
}else if(age < 18){
    alert("You are too young..");
}else if(age >= 18 && age <= 50){
    alert("You can drink!");
}else if(age > 50 && age <= 80){
    alert("You should exercise..");
}else if(age > 80){
    alert("You can do whatever you want.");
}*/


function clickAndShow(id, show) {
    document.getElementById(id).innerText += " "+show;
}
