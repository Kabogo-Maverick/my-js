function productfn(x,y){
    return x*y
}
let result = productfn(20,30)
document.getElementById("demo1").innerHTML=result
console.log(result) 



const student = {}
student.first= "Helen"
student.last="Kimani"
student.age = 40
student.location="Othaya"
document.getElementById("demo2").innerHTML=JSON.stringify(student)
console.log(student)




const person = {
    firstName: "Noah",
    lastName : "Lyles",
    age      : 29,
    fullName : function() {
      return this.firstName + " " + this.lastName + " is "+" "+ this.age;
    }
  };
  document.getElementById("demo3").innerHTML = person.fullName()
  console.log(person)


// when you want to delete sth
      //   delete person.age;



const mywan = Object.values(person)
console.log(mywan)
//   document.getElementById("demo3").innerHTML = mywan



//json stringify
// Display JSON
document.getElementById("demo4").innerHTML = JSON.stringify(person);
      //output {"firstName":"Noah","lastName":"Lyles","age":29}

let names = ["ken","bob","ant","wan","kin","pan"]
let select = names.slice(2, 5)
document.getElementById("demo6").innerHTML=select
     // Selects ["ant", "wan", "kin"]