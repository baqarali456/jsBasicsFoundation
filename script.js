

//basics of javascript 

// Data Types in Javascript

//1- Primitive DATA types

let nums = 1;
let string = "baqar"
let booleanType = true || false
let bigIntType = 456644464781n
let nullType = null;
let undefinedType =  undefined;
let symbolType = Symbol("baqar");

//2- Non-Primitive or Refrence DATA Types

let ArrayType = [1,2,3,4,5,7,8]
let obj = {
  name:"baqar",
  role:"web development"
}
 function main(a,b){
  return a
  
 }
//  let datainMain = main(4,7);
// console.log(this);

// Objects in Javascript

 let mainObj = {
  name:"Baqar",
  role:"Full Stack Developer",
  definerole:function(){
    console.log(`The role of ${this.name} is ${this.role}`)
  }
 }
  
//  mainObj.definerole()
//  mainObj.role = "Web development";
//  console.log(typeof mainObj.definerole);

 
 
 // Iterate Objects through loops  by Using FOR Loop

 //Basic
//  let object_Keys = Object.keys(mainObj)

//  for(let i = 0;i < Object.keys(mainObj).length;i++){
//     if(typeof mainObj[Object.keys(mainObj)[i]] !== "function"){
//       console.log(`The ${Object.keys(mainObj)[i]} is ${mainObj[Object.keys(mainObj)[i]]}`)
//     } 
//  }
 
// In Loop 

//  for(key in mainObj){
//   if(typeof mainObj[key] != "function"){
//     console.log(mainObj[key])
//   }
//  }

// new Object at different memory locations
// let data = {...mainObj,name:"sayyed baqar ali"} // shallow copy

// let data = mainObj;
// data.name = "Baqar Ali Rizvi"
// console.log(data)
// console.log(mainObj)

// console.log(data === mainObj)

// console.log(mainObj.hasOwnProperty('name'))

// console.log(mainObj.propertyIsEnumerable('name'))

// console.log(mainObj.valueOf())
// Object.setPrototypeOf(mainObj,{learn:"web development"})

// console.log(Object.entries(mainObj))
// console.log(Object.keys(mainObj))
// console.log(Object.values(mainObj))

// console.log(Object.getOwnPropertyDescriptor(mainObj,'name'))
// Object.defineProperty(mainObj,'name',{
// writable: false
// })
// console.log(Object.getOwnPropertyDescriptor(mainObj,'name'))
// mainObj.name = "Zubair"
// console.log(mainObj)

// console.log(mainObj.hasOwnProperty('name'))

// Arrays in Javascript

// let heroes = ["superman","thor","batman","captain Marvel","Iron Man"];

// let sameheroes = heroes; // same refrence and same object
// console.log(sameheroes == heroes)

// sameheroes[1] = "Thor Thunder";
// console.log(heroes);

// Example of Shallow Copy

// let sameheroes = [...heroes];
// sameheroes[1] = "Thor Thunder";
// console.log('heroes',heroes);
// console.log('sameheroes',sameheroes);

// Array Methods

let heroes = ["superman","thor","batman","captain Marvel","Iron Man"];

// let addHeroes = heroes.push("nagraaj");
// console.log(addHeroes)
// console.log('hero',heroes)

// let removeLastItem = heroes.pop()
// console.log(heroes)
// console.log(removeLastItem)

// let removefirstItem = heroes.shift();
// console.log(removefirstItem)
// console.log(heroes)


// let addIteminFirst = heroes.unshift(removefirstItem);
// console.log(addIteminFirst);
// console.log(heroes);
// console.log(heroes)

// let slicing = heroes.slice(0,3);
// console.log(slicing);
// console.log(heroes);

// let deletedorReplaceValue = heroes.splice(0,2);
// console.log(deletedorReplaceValue);
// console.log(heroes);

// let filteringheroes = heroes.filter(ele=>ele === "thor");
// // console.log(filteringheroes);
// // console.log(heroes)


// let changeValue = heroes.map(ele=>ele === "thor"?"Thor Thunder":ele);
// console.log(changeValue);

// let findHero = heroes.find(ele=>ele === "superman");
// console.log(findHero)
// console.log(heroes)

// let findHeroIndex = heroes.findIndex(ele=>ele === "thor");
// console.log(findHeroIndex);

// let covertIntoString = heroes.join(',');
// console.log(covertIntoString);

// Iterate Array using Loops

// for (let index = 0; index < heroes.length; index++) {
//   const element = heroes[index];
//   if(element === "superman"){
//     console.log(element)
//   }
  
// }

// for(let val of heroes){
//   console.log(val)
// }
// console.log(val);

// heroes.forEach(ele=>console.log(ele))
// console.log(heroes)

// Date and Time
// let date = new Date();
// date.setMonth(2)
// let getDatainstr = date.toDateString();
// console.log(getDatainstr);

// constructor function and Prototype

// function createUser(name,role){
//   this.name = name;
//   this.role = role;
//   return this;  
// }

// createUser.prototype.definerole = function(){
//   console.log(`The role of ${this.name} is ${this.role}`)
// }

// let user1 = new createUser("Baqar","Full Stack development");
// let user2 = createUser("Zubair","MERN development");
// console.log(user1)

// user1.definerole();
// user2.definerole();

// Global and Local Scope in JS

// let num = 7;

// {
//   let num = 8;
//   console.log(num);  
// }
// console.log(num)

// let variable = "Baqar";

// function main(){
//   let variable = "Zubair ansari";
// }

// main()
// console.log(variable);
 
// function show(){
//   let username = "baqar";
//   {
//     let web = "Danish"
//     console.log(web,username)
//   }
//   console.log(username,web);
  
// }
// show();


// log this in different Functions

// function logThis(){
//   console.log(this) // window object in webAPI 
  
// }
// logThis()
// const logThis = function(){
//   console.log(this)  // window object in webAPI
  
// }
// logThis()

// const logThis = () =>{
//   console.log(this)  // window object in webAPI
// }

// logThis()


// SetTimeout & setInterval in JS

// setTimeout(()=>{
//   console.log("baqar")
// },1000)

// function showInterval(){
//     index++;
//     if(index == 4){
//       clearInterval(id)
//     }
//     console.log(index);
// }

// let index = 0
// let id = setInterval(showInterval,1000)

// const btn = document.querySelector('#orange');
// const h1 = document.querySelector('h1');
// let play = true;

// function start(){
//   if(count < 10){
//     count++
//   }
//   h1.innerHTML = `count ${count}`
// }
// function stop(){
//   if(count > 0){
//     count--
//   }
//   h1.innerHTML = `count ${count}`
// }

// let count = 0;
// let id;

// btn.addEventListener('click',()=>{
//   if(play){
//     clearInterval(id)
//     id = setInterval(start,1000);
//     play = false;
//   }
//   else{
//     clearInterval(id)
//     id = setInterval(stop,1000);
//     play = true;
//   }
  
// })
















































 



































