let output = document.getElementById("display");
let ac = document.getElementById("clear"); 
let del = document.getElementById("singledel");
let divide = document.getElementById("divide");
let multiply = document.getElementById("mul");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let sub = document.getElementById("sub");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let add = document.getElementById("add");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let dot = document.getElementById("dot");
let zero = document.getElementById("zero");
let equalsto = document.getElementById("equals");

let displaystring = ""; 
function addInput(value) {
  displaystring += value;
  output.value = displaystring;
}
ac.addEventListener("click", () => {
  displaystring = "";
  output.value = "";
});



del.addEventListener("click", () => {
  displaystring = displaystring.slice(0, -1);
  output.value = displaystring;
});
multiply.addEventListener("click", () => {
  addInput("*");
});
divide.addEventListener("click", () => {
  addInput("/");
}); 
seven.addEventListener("click", () => {
  addInput(7);
});
eight.addEventListener("click", () => {
  addInput(8);
});
nine.addEventListener("click", () => {
  addInput(9);
});
sub.addEventListener("click", () => {
  addInput("-");
});

four.addEventListener("click", () => {
  addInput(4);
});
five.addEventListener("click", () => {
  addInput(5);
});
six.addEventListener("click", () => {
  addInput(6);
});
add.addEventListener("click", () => {
  addInput("+");
});
one.addEventListener("click", () => {
  addInput(1);
});
two.addEventListener("click", () => {
  addInput(2);
});
three.addEventListener("click", () => {
  addInput(3);
});

dot.addEventListener("click", () => {
  addInput(".");
});
zero.addEventListener("click", () => {
  addInput(0);
});

equalsto.addEventListener("click", function () {
  output.value = eval(displaystring);
  displaystring = String(output.value);
});
