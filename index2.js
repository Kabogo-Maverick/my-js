//if  else statement
let hour = 18;
let greeting;
if (hour < 12 ){
    greeting = "Good day"
} else {
    greeting = "Good night"
}
document.getElementById("greet").innerHTML=greeting




// for loops
let  cars = ["honda","vitz","wagon","prado","subaru","jeep"];
let text =""
for (let i=0; i < cars.length; i++){
    text += cars[i] + "<br>"
}
document.getElementById("sale").innerHTML=cars



let textb = "";

for (let i = 0; i < 5; i++) {
  textb += "The number is " + i + "<br>";
}
document.getElementById("no").innerHTML = textb;




//FOR IN LOOP

//The JavaScript for in statement loops 
// through the properties of an Object

const person = {fname:"Alex", lname:"Joe", age:35}; 
let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("for-in").innerHTML = txt;


//ARRAY FOR EACH

const numbers = [45, 4, 9, 16, 25];

let txt2 = "";
numbers.forEach(myFunction);
document.getElementById("for-each").innerHTML = txt2;

function myFunction(value) {
  txt2 += value + "<br>"; 
}



// FOR OF LOOP
const cars2 = ["BMW", "Volvo", "Mini"];

let text3 = "";
for (let x of cars2) {
  text3 += x + "<br>";
}

document.getElementById("for-of").innerHTML = text3;



// another for loop for phones
const phones = ["iphone","samsung","oppo","tecno"]
let phonetext =""
for (let x of phones){
    phonetext += x + "<br>"
}
document.getElementById("phones").innerHTML = phonetext

//FOR LOOP ANOTHER ONE
const cars4 = ["BMW", "Volvo", "Saab", "Ford"];

let i = 0;
let text4 = "";
for (;cars4[i];) {
  text4 += cars4[i] + "<br>";
  i++;
}

document.getElementById("while").innerHTML = text4;



//WHILE LOOP
const phones1 = ["iPhone", "Samsung", "OnePlus", "Google Pixel", "Xiaomi"];
let p = 0; 
let phoneList = ""; 

while (p < phones1.length) {  
  phoneList += phones1[p] + "<br>"; 
  p++; 
}

document.getElementById("pop").innerHTML = phoneList; 

