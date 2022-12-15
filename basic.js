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
  property : "item1",
  function : function(){

  }
};
Object.property = "ChangeItem1";
Object.newProperty = "addNewItem";

function function1(argument1, argument2) {
    console.log(argument1 + argument2); /*function's body*/
}

function1(5, 10);
