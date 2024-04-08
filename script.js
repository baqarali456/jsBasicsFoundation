// // Javascript is synchronus programming Language;
// // Javascript is a single threaded Language;

// // Data Types

// // Primitive Data Types

// let empty = null;   //  type - Object
// let num = 8;
// let str = "baqar";
// let symbolic = Symbol("baq");
// let nodefine;
// let bolean = true || false;
// let bigInteger = 123456789n;

// // Non-primitve and Refrence Data Types;

// let obj = {  //  type - Object
//     name:"baqar",
//     role:"web developer",

// }

// let arr = [1,2,3,4];  //  type - Object

// function hello(){     //  type - function
//     console.log("hello world");

// }

// // operators

// // Assignment operators

// let a = 6;
// a+=1;
// // console.log(a); // output 7;

// // Logical Operators

// let findtrue = 0 || ""; // if both values false then output is right hand value
// // console.log(findtrue);

// let andTrue = undefined &&  0;
// // if both values false then output is left hand value
// // console.log(andTrue);

// // Comparision Operators

// let compareValue = "4"== 4; //  comparision can't between datatypes
// // console.log(compareValue);

// compareValue = "4"=== 4; // comparision between datatypes

// // Loops

// for(let i = 0;i<6;i++){ // loop starts from 0 to 5
//     console.log(i);
//     console.clear();
// }

// arr = [1,2,3,4];

//  for(let i =0;i<arr.length;i++){
//     console.log(arr[i]);
//     console.clear();

//  }

//  for(let i = 0;i<Object.keys(arr).length;i++){
//     console.log(arr[Object.keys(arr)[i]]);
//     console.clear();
//  }

//  arr.forEach(ar=>console.log(ar))

//  for (const value of arr) {
//     console.log(value);
//     console.clear();

//  }

//  for (const key in arr) {
//     console.log(arr[key]);
//     console.clear();

//  }

//  obj = {  //  type - Object
//     name:"baqar",
//     role:"web developer",

// }

// for (const key in obj) {
//     console.log(`The key of obj are value -- ${obj[key]}`);
//     console.clear();

// }

//  let i = 0;
//  while(i < arr.length){
//      console.log(arr[i]);
//      i++;
//      console.clear();
//     }

//  let j = 0;
//  do{
//     console.log(arr[j]);
//     j++;
//  }while(j < arr.length);

//  console.clear();

//  // Map,filter,Reduce,find,findIndex

//  arr = [1,2,3,4];

//   let squareNumbers = arr.map(ar=>Math.pow(ar,2));
//   console.log(squareNumbers);
//   console.clear();

//   let findLargestNumber = arr.filter(ar=>ar % 2 === 0);
//   console.log(findLargestNumber);
//   console.clear();

//   let sumofArray = arr.reduce((acc,it)=>acc+it,0);
//   console.log(sumofArray);
//   console.clear();

//   let findElement = arr.find(ar=>ar == 1);
//   console.log(findElement);
//   console.clear();

//   let findIndexs = arr.findIndex(ar=>ar == 3);
//   console.log(findIndexs);

//   console.clear();

//   // Adding Element to the dom;

//   arr = [1,2,3,4];
// //   for(let i = 0;i < arr.length;i++){
// //       let h1 = document.createElement('h1');
// //     h1.innerHTML = arr[i];
// //     document.body.appendChild(h1)
// //     console.clear();
// //   }

//  str = "";
//  arr = [1,2,3,4];

// arr.forEach(ar=>{
//    str += `<p>${ar}</p>`;
// //    document.body.innerHTML = str
// })

// // searching DOM elements

// let boxes = document.getElementsByClassName('box');
// console.log(boxes); // HTML Collection

//   console.clear();

//   boxes = document.querySelector('.box');
//   console.log(boxes); // first Element

//   console.clear();

//   boxes = document.querySelectorAll('.box');
//   console.log(boxes); // NodeList Like Array
//   console.clear();

//   box1 = document.getElementById('box1');
//   console.log(box1);
//   console.clear();

// //   box1.setAttribute("id","uniqueBox");
// //   console.log(box1.hasAttribute("id"));
// //   console.clear();

//   // Callback Functions

//   function say(v,Callback){
//     console.log(v);
//     Callback()
//   }

//   function findCall(){
//       console.log("Zubair")
//     }
//     say("baqar",findCall);

//     console.clear();

//     // Callback Hell;

//     function getId(id,Callback){
//        setTimeout(()=>{
//         console.log(id);
//         if(Callback){
//             Callback();
//         }
//        },3000)
//     }

//     // getId(2,()=>{
//     //     getId(3,()=>{
//     //         getId(4,()=>{
//     //             getId(5)
//     //         })
//     //     })
//     // });

//     // Promises

//     /* The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.*/

//     /*
//     A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
//      not Resolve() and rejected()
// fulfilled:  meaning that the operation was completed successfully. resolve() is fulfilled
// rejected: meaning that the operation failed. reject() is is rejected state

//     */

//    let p1 = new Promise((resolve,reject)=>{
//         // resolve(4) // fullfilled state,result - 4
//         // reject("error") // rejected state,result - "error";
//         console.log("baqar") // pending state
//     });

//     // console.log(p1);

//     p1
//     .then(value=>console.log(value))
//     .catch(err=>console.log(err));
//     console.clear();

//     // Closures

//     function Outer(){
//      let name = "Baqar";

//         function inner(){
//             console.log(name);
//         }
//         name = "Zubair";
//         return inner

//     }
//     let mainfunc = Outer()
//     mainfunc();

//     console.clear();

//     boxes = document.querySelectorAll('.box');

//     boxes.forEach(box=>{
//      box.addEventListener('click',generateColors(box.id))
//     })

//     // closures Example

//     function generateColors(colors){
//        return function returnColor(){
//            document.body.style.backgroundColor = `${colors}`

//         }
//     }

//     // Conditional Statements;

//     let age = "ba";
//     if(age < 18){
//         // console.log("You are Kid")
//     }
//     else if(age >= 18){
//         //  console.log("You are Elder");
//     }
//     else{
//         // console.log("Not Valid age");
//     }

//     // async Javascript

//     // let load = 1
//     // let time = 3000

//     // setInterval(()=>{

//     //     console.log(`${load++},${time}`);
//     // },time);

//     // let pro1 = new Promise((resolve,reject)=>{
//     //     setTimeout(()=>{
//     //         resolve("baqar")
//     //     },1000)
//     // })
//     // let pro2 =  new Promise((resolve,reject)=>{
//     //     setTimeout(()=>{
//     //         resolve("zubair")
//     //     },2000)
//     // })
//     // let pro3 = new Promise((resolve,reject)=>{
//     //     setTimeout(()=>{
//     //         resolve("haider")
//     //     },3000)
//     // })

//     // let load = true
//     // async function mainfuncs(){
//     //    console.time()
//     //    let a1 =  pro1
//     //    let a2 =  pro2
//     //    let a3 =  pro3;
//     // //    console.log(a1,a2,a3);

//     //    let values = await Promise.all([a1,a2,a3]);

//     //    console.log(values);
//     // //    console.log("baqar");
//     //    load = false
//     //    console.timeEnd()

//     // }
//     // mainfuncs()
//     // console.log(load);
//     console.clear();

//     // pattern print;

//     let stri = ""
//     for(i=0;i<=4;i++){
//         stri = stri + "*"

//     }
//     // console.log(stri);

//     stri = ""
//     for(i=0;i<=3;i++){
//         stri += '*'

//     }
//     // console.log(stri);
//     stri = ""
//     for(i=0;i<=2;i++){
//         stri += '*'

//     }
//     // console.log(stri);
//     stri = ""
//     for(i=0;i<=1;i++){
//         stri += '*'

//     }
//     // console.log(stri);
//     stri = ""
//     for(i=0;i<=0;i++){
//         stri += '*'

//     }
//     // console.log(stri);

//     // async Javascript

//    /* async callbacks go to Web APIs then register in register callbacks . The task is sent to the queue whenever the async callback times out.
//  The task queue sends an async callback to the callstack.

//  */

//     // orange.addEventListener('click',()=>{
//     //     console.log("baqar");
//     // })

//     // console.log("hello");

//     // setTimeout(()=>{
//     //     console.log("hello2");
//     // },3000);

//     // let a2 = "baqar";

//     // function helloji(){
//     //     a2 = "Zubair";
//     //     console.log("helloji");
//     // }
//     // helloji();
//     // console.log(a2);

//     // let pattern = "";
//     // for(i=0;i<5;i++){
//     //     pattern += "*";
//     // }

//     // for(i=0;i<6;i++){
//     //     const p = document.createElement('p');
//     //     p.innerHTML = i;
//     //     document.body.appendChild(p);
//     // }

//     // const orange = document.getElementById('orange');
//     // let index = 0;
//     // orange.addEventListener('click',()=>{
//     //   index++;
//     //   console.log(index);
//     //   load()
//     // })

//     // let loading = true;

//     // function load(){
//     //     if(loading){
//     //         let h1 = document.createElement('h1');
//     //         h1.innerHTML = "Loading...";
//     //         h1.style.textAlign = "center";
//     //         document.body.appendChild(h1)
//     //         setTimeout(()=>{
//     //          h1.innerHTML = "";
//     //         },3000);
//     //         loading = false;
//     //     }
//     //     else{
//     //         let h1 = document.createElement('h1');
//     //         h1.innerHTML = "Loading...";
//     //         h1.style.textAlign = "center";
//     //         document.body.appendChild(h1)
//     //         setTimeout(()=>{
//     //          h1.innerHTML = "";
//     //         },3000);
//     //     }
//     // }
//     // load();

//     // const boxess = document.querySelectorAll('.box');
//     // // console.log(boxess);
//     // boxess.forEach(box=>{
//     //     const ids = box.id;
//     //     box.innerHTML = ids.charAt(0).toLocaleUpperCase() + ids.slice(1).toLocaleLowerCase()
//     // });

//     // let sum = 0;

//     // for(i=1;i<=4;i++){ //i=4
//     //  sum += i; //10
//     // }
//     // console.log(sum);

//     // let factorial = 1;

//     // for(i=1;i<=5;i++){ // i=1
//     //     factorial *= i  //120
//     // }
//     // console.log(factorial);

//     // for(let i=0;i<6;i++){
//     //     console.log(document.body.innerHTML = `hello ${i}`)
//     //     document.body.innerHTML = `hello ${i}`;

//     // }

//     let pattern = "";
//     for(let i=0;i<5;i++){
//         pattern = pattern + "*"; //0 //01 //012 //0123 //01234
//     }
//     // console.log(pattern);
//     pattern = "";
//     for(let i=0;i<5;i++){
//        pattern = `${pattern}*`; /* output "*****";  */
//     //    console.log(pattern);
//     }
//     // for(let i =0;i<4;i++){
//     //     let p = document.createElement('p');
//     //     p.innerHTML = `index ${i}`;
//     //     document.body.appendChild(p)
//     // }

//     let largestString = ["baqar","zubair Ansari","Talib Khan"];
//      let findLargestString = largestString[0];

//     // for(let i=0;i<largestString.length;i++){
//     //    if(largestString[i].length > findLargestString.length){
//     //     findLargestString = largestString[i]
//     //    }
//     // }
//     // console.log(findLargestString);

//         // const boxess = document.querySelectorAll('.box');

//         // function generateColor(){
//         //     let hex = "#";
//         // for(let i =0;i<6;i++){
//         //     let colors = "0123456789ABCDEF";
//         //     hex = `${hex}${colors[Math.floor(Math.random() * colors.length)]}`;
//         // }
//         // return hex;
//         // }

//         // boxess.forEach(box=>{
//         //  box.style.backgroundColor = generateColor()
//         // });

//         let arr1 = [4,7,8,10,12];
//         // for(i=0;i<6;i++){
//         //     console.log(arr1[i]);
//         // }

//         // arr1[0] = 9;
//         // console.log(arr1);

//         // New Revision

//     //1 primitive data types

//     // null,number,string,symbol,undefined,boolean,bigint

//     //2 non-primitive Data types;

//     // Object,Array,Function;

//     //3 Array

//     let arry = [4,7,8,10,15];
//     // console.log(arry[0]);
//     // delete arry[1];
//     // console.log(arry);

//     // for(i=0;i<arry.length;i++){
//     //     console.log(arry[i]);
//     // }

//    //4- String;

//     // let stris = "Baqar Ali";
//     // let totalLength = 0;
//     // for(i=0;i<stris.length;i++){
//     //     console.log(stris[i]);
//     //     if(!stris[i].includes(" ")){
//     //         totalLength++;
//     //     }
//     // }
//     // console.log(totalLength);

//     //5- Global And Local Scope;

//     {
//         let s = 10;
//         var q = 11;
//         const g ="baqar"

//     }

//     // console.log(s);
//     // console.log(q);
//     // console.log(g);
//     // function holo(){
//     //    let qwe = 10;
//     //    console.log(qwe);

//     // }
//     // holo();
//     // qwe = 25;
//     // console.log(qwe);

//     // console.log("baqar");
//     // let hex = "#";
//     // for(let i=0;i<6;i++){
//     //     let colors = "0123456789ABCDEF";
//     //     hex += colors[Math.floor(Math.random() * colors.length)]

//     // }
//     // console.log(hex);

//     // document.body.backgroundColor = `${hex}`;

//     // let hex = "#";
//     // let colors = "0123456789abcdef"
//     // for(i=1;i<=6;i++){
//     //  hex = `${hex}${colors[Math.floor(Math.random() * colors.length)]}`;

//     // }
//     // document.body.style.backgroundColor = hex;

//     // let password = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*({)[\]";
//     // let randomlength = Math.ceil(Math.random() * 30);
//     // let randompass = "";
//     // for(i=1;i<=randomlength;i++){
//     //  randompass += password[Math.floor(Math.random() * password.length)]
//     // }
//     // console.log(randomlength);

//     // console.log(randompass);

//     // let sum = 0;
//     // for(i=1;i<=5;i++){
//     //    sum += i

//     // }
//     // console.log(sum);

//     // let n = prompt("Enter your number");
//     // n = parseInt(n);
//     // let factorial = 1;

//     // for(let i=1;i<=n;i++){
//     //  factorial = factorial * i //24
//     // }
//     // alert(`your factorial is ${factorial}`);

//     // for(i=1;i<=5;i++){
//     //     let p = document.createElement('p');
//     //     p.innerHTML = `hello ${i}`;
//     //     document.body.appendChild(p)
//     // }
//     // const ps = document.querySelectorAll('p');
//     // // ps.forEach((p,i)=>console.log(p));
//     // let check = false;
//     // for(Element of ps){
//     //     Element.innerHTML = check?"Helloji":"HelloBye";
//     // }

//     // let arrAR = [45,85,90,4,32,1];
//     // let largestNumber = arrAR[0];

//     // for(let i = 0;i<arrAR.length;i++){
//     //   if(arr[i] > largestNumber){
//     //     largestNumber = arr[i];
//     //   }
//     // }
//     // console.log(largestNumber);

//     // for(i=0;i<6;i++){  // Looping 6 times 0 to 5;
//     //     console.log(i);
//     // }

//     //  let arrAR = [45,85,90,4,32,1];
//     //  let length = 0;

//     //  arrAR.forEach(arrAR=>{
//     //   length++;
//     //  })
//     //  console.log(length,arrAR.length);

//     // Scoping

//     // let papa = "Zafar Ali"

//     // function functionExecution(){
//     //      papakaBeta = "Baqar Ali";
//     //     console.log(papa);

//     // }
//     // functionExecution();
//     // console.log(papakaBeta);

//     // for(i=0;i<6;i++){
//     // console.log("baqar");
//     // }

//     // let sum = 0;
//     // for(i=1;i<6;i++){
//     //     sum += i // sum =15;
//     // }
//     // console.log(sum);

//     //  let factorial = 1;
//     //  for(let i = 1;i<=6;i++){
//     //      factorial = factorial * i; //720
//     //  }
//     //  console.log(factorial);

//     let sum = 0;
//      // sum += 1;
//         //
//                                 // sum+=2;
//                                 // console.log(sum);
//                                 // sum += 3;
//                                 // console.log(sum);
//     //  for(let i =1;i<=5;i++){
//     //         sum = sum + i;
//     //         console.log(`Sum of ${i} is ${sum}`);
//     //      }
//     //      console.log(sum);

//     // factorial =  2 * factorial;
//     // console.log(factorial); // 2
//     // factorial = 3 * factorial;
//     // console.log(factorial); // 6
//     // factorial = 4 * factorial;
//     // console.log(factorial); //24
//     // factorial = 5 * factorial;
//     // console.log(factorial); // 120
//     // factorial = 6 * factorial;
//     // console.log(factorial); //720;

//     // let factorial = 1;
//     // for(let i = 1; i<=5;i++){
//     //     factorial = i * factorial;
//     //     console.log(`factorial of i ${i} is ${factorial}`,);
//     // }
//     // // console.log(factorial);

//     // let sub = 10;
//     // sub = sub - 5;
//     // console.log(sub);// 5;
//     // sub = sub - 3;
//     // console.log(sub);//2
//     // sub = sub + 4;
//     // console.log(sub); //6;
//     // sub = sub - 3;
//     // console.log(sub);//3
//     // sub = sub - 3;
//     // console.log(sub); //0
//     // sub = sub - (-16);
//     // console.log(sub); // 16;
//     // sub = sub - 8;
//     // console.log(sub);//8
//     // sub = sub - 3;
//     // console.log(sub);//5
//     // sub = sub - 2;
//     // console.log(sub); //3
//     // sub = sub + 1;
//     // console.log(sub); //4

//     // for(i=0;i<6;i++){
//     //     console.log(`${i} Hello Ji`);
//     // }

//     // for(let i = 0;i<5;i++){
//     //     let p = document.createElement('p');
//     //     p.innerHTML = `${i} Hello Ji`;
//     //     document.body.appendChild(p);
//     // }

//     let string = "Hello";

//     // for(let val of string){
//     //     console.log(val);
//     // }

//     // Array.from(string).forEach(element=>{
//     //     console.log(element);
//     // })

//     // let arrz =  [1,4,7,8,10,12];

//     // arrz.forEach(element => {
//     //     if(element < 10) console.log(element);
//     // });

//     // console.log(this)

//     let qwe = [4,5,7,8,10,12];
//     // console.log(qwe);

//    Object.prototype.print = function (){
//         this.forEach(that=>{
//             console.log(that);
//         });
//     }

//     // qwe.print();

//     let stringigy = "Baqar Ali";
//     // stringigy.print()

//     // let objs = {
//     //     name:"Baqar ali",
//     //     role:"web development",
//     //     show:function (){
//     //         console.log(`The role of ${this.name} is ${this.role}`)
//     //     }
//     // }
//     // objs.show();
//     // objs.name = "Zubair Ansari";
//     // objs.show();

//     let trimsStr = "  Baqar Ali   ";
//     // strim = trimsStr.trim();
//     // console.log(strim);

//     String.prototype.FullLength = function(){
//        return this.trim().length;
//     }
//     console.log(trimsStr.FullLength());

//     console.clear();

//     //callback functions

//     // function getId(id,callback){
//     //     if(callback){
//     //         setTimeout(()=>{
//     //             callback();
//     //             console.log(id);

//     //         },3000)
//     //     }
//     // }
//     // getId(1,function(){
//     //     getId(2,function(){
//     //         getId(3,function(){
//     //             getId(4)
//     //         })
//     //     })
//     // })

// //     let objs = {
// //       0:"baqar",
// //       1:"zubair",
// //       print:function(){
// //         console.log(this);
// //       }

// //     }
// //    objs.print();
// //    objs[0] = "Baqar Ali",
// //    objs.print();

// //    function createUser(name,email){
// //         this.name = name;
// //         this.email = email;
// //         console.log(this);

// //    }
// //    let chai1 = new createUser("baqar","baqar@google.com");
// //    let chai2 = new createUser("zubair","zubair@google.com");
// //    console.log(chai1);
// //    console.log(chai2);

// let qwse = [1,4,5,7];

//  Array.prototype.fillter = function(){
//     this.push(4,5);
//     console.log(this);
//  }
//  qwse.fillter();

//    console.clear();

// //    function says(call){
// //        console.log("Hii");
// //        call()
// //    }

// //    function hellos(){
// //      console.log("baqar");
// //    }

// //    says(hellos);

// // function foo(callback){
// //     console.log("foo");
// //      callback()
// //    }

// //    function Bar(){
// //     console.log("Bar");

// //    }

// //    foo(Bar);

// let arri = [11,15,17,18,21];

// Object.prototype.printify = function(){
//     console.log(this);
// }
// String.prototype.strPrint = function(){
//     console.log(this);
// }

// arri.printify()
// "Bear".strPrint()
// console.log("Bear");
// true.printify();

// console.clear();
// let a = "baqa"

// Data in Javascript

// Primtive Data Type

let num = 1;
let bool = true;
let str = "baqar";
let novalue = null;
let nodefine = undefined;
let bigInteger = 41237894n;
let symbolic = Symbol("baqar");

// Non-Primitve Data Type
let arr = [1, 2, 3, 4, 5, 6];
let obj = {
  name: "baqar",
  role: "development",
};
function say() {
  // console.log("baqar");
}
say();

// functions

function userlogin(username) {
  if (!username) {
    return "Please a username";
  }
  return username + " logged in";
}
let userData = userlogin();

console.log(userData);
console.clear();

// loops
let pattern = "";

for (let i = 0; i < 6; i++) {
  pattern += "*";
  // console.log(pattern)
}

pattern = "";
let i = 0;
while (i < 6) {
  pattern += "*";
  i++;
  //  console.log(pattern);
}

// map reduce filter

arr = [1, 2, 3, 4, 5, 6];
let squareofArr = arr.map((ele) => Math.pow(ele, 2));
// console.log(squareofArr)

let smallstr = "baqar is a good boy";
let strToarray = smallstr.split(" ");
let capitalize = strToarray
  .map((ele) => ele.charAt(0).toLocaleUpperCase() + ele.slice(1))
  .join(" ");
//  console.log(capitalize);

smallstr = "baqar is a good boy";
strToarray = smallstr.split(" ");
let reverseStr = strToarray
  .map((ele) => ele.split("").reverse().join(""))
  .join(" ");
// console.log(reverseStr)

let find1stchar = strToarray.filter((ele) => ele.charAt(0) == "b");
// console.log(find1stchar);

let users = [
  {
    name: "baqar",
    role: "web development",
  },
  {
    name: "zubair",
    role: "full stack",
  },
  {
    name: "farid bhai",
    role: "software Testing",
  },
];

let finduserDetails = users.filter((ele) => ele.role.includes("l"));
// console.log(finduserDetails)

let sum = 0;
for (j = 1; j <= 5; j++) {
  sum += j;
  //    console.log(sum)
}
arr = [1, 2, 3, 4, 5, 6];
// let sumofallnumber = arr.reduce((acc,it)=>acc+it,0)
// console.log(sumofallnumber);

// Data Type Coversion

// console.log("2" > 1 > 5);
console.log(null >= 0);
console.clear();

// setTimeout(() => {
//   console.log("hello"); // tq1
// }, 0);
// new Promise((resolve) => { //cstack
//     setTimeout(() => { // tq2
//         resolve(4);
//     }, 0);

// }).then((res) => console.log(res));

// function say(){
//     console.log("baq")
// }
// say()
console.clear();
// setTimeout(()=>{
//   console.log("baqar");
// },0)
// Promise.resolve(
//   "hello"
// ).then(value=>console.log(value));

// let factorial = 5 * 4;
// console.log(factorial)
// factorial = factorial * 3

// let factorial = 1;
// for(let i = 1;i<=5;i++){
//   factorial = factorial * i //120
// }
// console.log(factorial);

// arr = [12,14,17,18];
// for(let i = 0;i<arr.length;i++){
//   if(arr[i] == 14){
//     console.log(arr[i]);
//     break;
//   }
//   console.log(arr[i])
// }

//  sum = 0;
//  for(let i = 0;i<=10;i++){
//   sum += i;//15
//   console.log(sum)
//  }

// const hello = () =>{
//   console.log(this) // in browser global object and in node {} object
// }
// hello()
// function  hello(){
//   console.log(this) // in browser global object and in node <ref *1> Object [global]
// }
// hello()

// const hello = function(){
//   console.log(this)  // in browser global object and in node <ref *1> Object [global]
// }
// hello()

function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.Role = function (n) {
  return `The role of ${this.username} is ${n}`;
};

let chai = new User("baqar", "baqar@yahii.com");
// console.log(chai);

// console.log(chai.Role("Full stack developer"));

//   let time = new Date().getTime();
//   console.log(time);

// function GFG_Fun() {
// 	let date = new Date(time);
// 	console.log("Milliseconds = "+ date.toLocaleTimeString());
// }
// GFG_Fun();

// document.getElementById('orange').addEventListener('click',(e)=>{
//    let currentTargetTime = new Date();
//    currentTargetTime.setMilliseconds(e.timeStamp);
//    console.log(currentTargetTime.toLocaleTimeString());
// });

// async function hello(){
//   return 5 + 7
// }
// console.log(hello());
// console.log("baqar");

// setTimeout(()=>{
//  console.log("baqar")
// },0)
// let p = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject("Something went wrong");
//   },0)
// })
// p.then(value=>console.log(value)).catch((error)=>console.log(error));

// async function addition(x,y){
//  return x + y
// }
// console.log(addition(4,7))

// async function p(){
//   console.log('fetching some data');
//    let d = await addition(5,6);
//    console.log(d,'fetch some data');
// }

// p()
// p().then(val=>console.log(val)).catch(err=>console.log(err))

// let p = new Promise((resolve,reject)=>{
//   let user = {
//     username:"baqar",
//     role:"web development"
//   }
//   resolve(user)
// })
// console.log(p);

// p.then(val=>{
//   console.log(val)
// })

// console.log(promise1);

// promise1.then((val)=>console.log(val)
// )
// console.log("baqar");
// console.log("zubair");

//  promise1.then(val=>{
//   console.log(val)
//   return {
//     username:"baqar",
//     role:"web developer"
//   }
// })
// .then(val=>console.log(val));

// let promise1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("baqar")
    
//    resolve("hello")
//   },1000)
// })

// async function getPromise() {

//   let value =  promise1;
//   console.log(value);
//   console.log("asdfghijkl")

//   return 12

// }

// console.log(getPromise());

// getPromise().then(result => console.log(result));
// or
// (async () => {
//   console.log(await getPromise());
// })();

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("1 promise");
//   }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("2 promise");
//   }, 3000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("3 promise");
//   }, 3000);
// });

// async function sequentialresolvePromise() {
//   console.time()
//   let val1 = await p1;
//   console.log(val1);
//   let val2 = await p2;
//   console.log(val2);

//   let val3 = await p3;
//   console.log(val3);
//   console.timeEnd()
// }
// sequentialresolvePromise();


let p = new Promise((resolve,reject)=>{
  let error = !true;
  if(error){
   reject(new ReferenceError("something went wrong"))
  }
  else{
    resolve("baqar")
  }
     
});
// console.log(p,"line no 1207")

// p.then(val=>console.log(val)).catch(err=>console.log(err.message))

// async function handle(){
//   try {
//     let val = await p;
//     console.log(val)
    
//   } catch (error) {
//     console.log(error.message);
//   }
// return "a"
// }
// console.log(handle())

// let newrray = [4,7,10,12,1,20];
// let sort = newrray[newrray.length - 1]
      
// for (let index = 0; index < newrray.length; index++) {
//   console.log(newrray[index])
//   if(arr[i] <= sort){
//     sort = arr[i]
//     console.log(sort)
    
//   } 
  
// }

 arr = [45,47,48,12,113,14];

// console.log(arr.push(1));
// console.log(arr.concat([45,4,12,18,24]));
// console.log(arr.some(ele=>ele > 50))
// console.log(arr.findIndex(ele=>ele === 48))

// let turn = "X"

// const exchangeValue = () =>{
//  return turn;
// }

//  function checkTurnValue(){
//   let data = exchangeValue();
//   console.log(data)
//  }

//  checkTurnValue()

// function sums(){
//   console.log(this)
//   // console.log(this.name)
  
// }
// sums()

// const sums = function(){
//  console.log(this.name)
  
// }
// sums()
// const sums = () =>{
//   console.log(this.name || "baqar ali")
// }
// sums.call({name:"baqar"})

// function createUser(name,age){
//  this.name = name;
//  this.age = age;
//  console.log(this)
 
// }

// // createUser.prototype.changeName = function(name){
// //  return this.name = name;
// // }
// const chaiwala =  createUser("baqar",26);
// console.log(chaiwala)

// console.log(chaiwala.changeName("Baqar Ali"))


// Array.prototype.customforEach = function(callback){
//     for (let index = 0; index < this.length; index++) {
//       if(callback !== "function"){
          // console.log("Please give a function")
//       }
//       callback(this[index],index) //(ele)=>console.log(ele)
      
//     }
// }
// let newArr = ["45","451"]
// newArr.customforEach((ele)=>console.log(ele));

//LOCAL AND GLOBAL SCOPE

// let d = "baqar"
// function sums (){
//   d = "zubair"
//  let website = "baqar.com";
//  function inner(){
//    let route = "https://"
//    console.log(route + website);
   
//  }
//  inner()
//  console.log(route)
 
// }
// console.log(d)

// sums()


// Promise

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     reject(new ReferenceError("hello error"))
//   },1000)
// })

// p1.then(value=>console.log(value)).catch(err=>console.log(err.message))
// console.log("baqar")





































