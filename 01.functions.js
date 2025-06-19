function sayMyname() {
console.log("H")
console.log("A")
console.log("R")
console.log("s")
console.log("H")
console.log("I")
console.log("T")
    
}

//sayMyname();

//function addTwonumbers(number1, number2){

//   console.log(number1 + number2);
//}

function addTwonumbers(number1, number2){

   //let result = number1 + number2
   //return result
   return number1 + number2 
}

 const result = addTwonumbers(3, 5)

 //console.log("Result:", result);


 function loginUsermessage(username= "Aryan"){
   if (username === undefined) {
      console.log("Please enter a Username");
      return
   }
      return`${username}just logged in`
 }

 //console.log(loginUsermessage(" Harshit "))
 console.log(loginUsermessage("harshit"))


 function calculateCartPrice(...num1){
   return num1 
 }

// console.log(calculateCartPrice(200,400,500))


const user ={
   username: "harshit",
   price: 199,
}

function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is 
      ${anyobject.price}`);
}

// handleObject(user);
handleObject({
   username: "harsh",
   price: 299,
})

const myNewArray =[200, 400, 100, 600]

function returnsecondValue(getArray){
   return getArray[1]
}

// console.log(returnsecondValue(myNewArray));
console.log(returnsecondValue([200, 400, 500, 1000]));