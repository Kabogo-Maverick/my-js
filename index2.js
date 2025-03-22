function productfn(x,y){
    return x*y
}
let result = productfn(20,30)
// document.getElementById("demo1").innerHTML=result
console.log(result) 

const student = {}
student.first= "Helen"
student.last="Kimani"
student.age = 40
student.location="Othaya"
console.log(student)


const person = {
    firstName: "Noah",
    lastName : "Lyles",
    age      : 29,
    fullName : function() {
      return this.firstName + " " + this.lastName + " is "+" "+ this.age;
    }
  };
  console.log(person)
  
//   document.getElementById("demo3").innerHTML = person.fullName()
 



// when you want to delete sth
      //   delete person.age;




const mywan = Object.values(person)
console.log(mywan)
//   document.getElementById("demo3").innerHTML = mywan

//json stringify
// Display JSON
document.getElementById("demo4").innerHTML = JSON.stringify(person);
