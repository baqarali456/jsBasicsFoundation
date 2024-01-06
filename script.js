// Javascript is synchronus programming Language;
// Javascript is a single threaded Language;

// Data Types

// Primitive Data Types

let empty = null;   //  type - Object
let num = 8;
let str = "baqar";
let symbolic = Symbol("baq");
let nodefine;
let bolean = true || false;
let bigInteger = 123456789n;

// Non-primitve and Refrence Data Types;

let obj = {  //  type - Object
    name:"baqar",
    role:"web developer",

}

let arr = [1,2,3,4];  //  type - Object

function hello(){     //  type - function
    console.log("hello world");
    
}

// operators 

// Assignment operators

let a = 6;
a+=1;
// console.log(a); // output 7;

// Logical Operators

let findtrue = 0 || ""; // if both values false then output is right hand value
// console.log(findtrue);

let andTrue = undefined &&  0;
// if both values false then output is left hand value
// console.log(andTrue);

// Comparision Operators

let compareValue = "4"== 4; //  comparision can't between datatypes
// console.log(compareValue);
 
compareValue = "4"=== 4; // comparision between datatypes

// Loops

for(let i = 0;i<6;i++){ // loop starts from 0 to 5
    console.log(i);
    console.clear();
}

arr = [1,2,3,4];

 for(let i =0;i<arr.length;i++){
    console.log(arr[i]);
    console.clear();
    
 }

 for(let i = 0;i<Object.keys(arr).length;i++){
    console.log(arr[Object.keys(arr)[i]]);
    console.clear();
 }

 arr.forEach(ar=>console.log(ar))

 for (const value of arr) {
    console.log(value);
    console.clear();
    
 }

 for (const key in arr) {
    console.log(arr[key]);  
    console.clear();
    
 }

 obj = {  //  type - Object
    name:"baqar",
    role:"web developer",

}


for (const key in obj) {
    console.log(`The key of obj are value -- ${obj[key]}`); 
    console.clear();
    
}

 

 let i = 0;
 while(i < arr.length){
     console.log(arr[i]);
     i++;
     console.clear();
    }
    
 let j = 0; 
 do{
    console.log(arr[j]);
    j++;
 }while(j < arr.length);

 console.clear();
 

 // Map,filter,Reduce,find,findIndex

 arr = [1,2,3,4];

  let squareNumbers = arr.map(ar=>Math.pow(ar,2));
  console.log(squareNumbers);
  console.clear();
  
  let findLargestNumber = arr.filter(ar=>ar % 2 === 0);
  console.log(findLargestNumber);
  console.clear();
  
  let sumofArray = arr.reduce((acc,it)=>acc+it,0);
  console.log(sumofArray);
  console.clear();

  let findElement = arr.find(ar=>ar == 1);
  console.log(findElement);
  console.clear();
  
  let findIndexs = arr.findIndex(ar=>ar == 3);
  console.log(findIndexs);

  console.clear();

  // Adding Element to the dom;
  
  arr = [1,2,3,4];
//   for(let i = 0;i < arr.length;i++){
//       let h1 = document.createElement('h1');
//     h1.innerHTML = arr[i];
//     document.body.appendChild(h1)
//     console.clear();
//   }

 str = "";
 arr = [1,2,3,4];

arr.forEach(ar=>{
   str += `<p>${ar}</p>`;
//    document.body.innerHTML = str
})

// searching DOM elements

let boxes = document.getElementsByClassName('box');
console.log(boxes); // HTML Collection 

  console.clear();
  
  boxes = document.querySelector('.box');
  console.log(boxes); // first Element

  console.clear();
  
  boxes = document.querySelectorAll('.box');
  console.log(boxes); // NodeList Like Array
  console.clear();
  
  box1 = document.getElementById('box1');
  console.log(box1);
  console.clear();

//   box1.setAttribute("id","uniqueBox");
//   console.log(box1.hasAttribute("id"));
//   console.clear();
  

  // Callback Functions

  function say(v,Callback){
    console.log(v);
    Callback()
  }

  
  function findCall(){
      console.log("Zubair")
    }
    say("baqar",findCall);

    console.clear();
    
    // Callback Hell;

    function getId(id,Callback){
       setTimeout(()=>{
        console.log(id);
        if(Callback){
            Callback();
        }
       },3000)
    }

    // getId(2,()=>{
    //     getId(3,()=>{
    //         getId(4,()=>{
    //             getId(5)
    //         })
    //     })
    // });


    // Promises

    /* The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.*/

    /* 
    A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
     not Resolve() and rejected()
fulfilled:  meaning that the operation was completed successfully. resolve() is fulfilled
rejected: meaning that the operation failed. reject() is is rejected state 
    
    */
   
   let p1 = new Promise((resolve,reject)=>{
        resolve(4) // fullfilled state,result - 4
        // reject("error") // rejected state,result - "error";
        console.log("baqar") // pending state
    });

    // console.log(p1);

    p1
    .then(value=>console.log(value))
    .catch(err=>console.log(err));
    console.clear();

    // Closures


    function Outer(){
     let name = "Baqar";
     
        function inner(){
            console.log(name);  
        }
        name = "Zubair";
        return inner

    }
    let mainfunc = Outer()
    mainfunc();

    console.clear();


    boxes = document.querySelectorAll('.box');

    boxes.forEach(box=>{
     box.addEventListener('click',generateColors(box.id))
    })


    // closures Example

    function generateColors(colors){
       return function returnColor(){
           document.body.style.backgroundColor = `${colors}`

        }
    }

    // Conditional Statements;

    let age = "ba";
    if(age < 18){
        // console.log("You are Kid")
    }
    else if(age >= 18){
        //  console.log("You are Elder");
    }
    else{
        // console.log("Not Valid age");
    }

    



    
    
    


    
    


    





  
  
  
  
  




  
  
  


  
  
  














