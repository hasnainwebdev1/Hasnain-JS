// Primitive

// 7 Types (Number, String, Boolean, Null, Undefined, Symbol, Bigint)


// Reference (Non Primitive)

// Array, Objects, Function

const score = 100;

const scorevalue = 100.3

const isLoggedin = false

const outsidetemp = null

let usergmail;

const id = Symbol('123')

const anotherid = Symbol('123')

console.log(id === anotherid);


// const bignumber = 278681681997692696290162916n

const heros = ["hasnain", "ali", "Wahaj"]

let myobj = {

name : "Hasnain",
age: 18,

}
const myfunction = function(){
    console.log("Hello World");

    

}

console.log(typeof outsidetemp); 

console.log(typeof scorevalue);


console.log(typeof myfunction);


/*Return type of variables in JavaScript
1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object*/


