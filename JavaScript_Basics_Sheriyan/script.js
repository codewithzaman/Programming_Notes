// 1) Word and KeyworD
// Word : jis chez ka js mn koe matlab na ho usko word kehtay hn jesay k chacha , good , man 
// KeyWord: jis chez ka js mn koe matlab ho usko keyword kehtay hn jesay k for , let , each , var , const etc.

// 2) Var Const and Let
// Variables and constants 
// Variable : code mn koe data store krnay k  leay jo use hota hy ussay variable kehtay hn jis ke value ko change b kr sktay hn .
// Constants : code mn koe data store krnay k  leay jo use hota hy ussay constant kehtay hn jis ke value ko change nhi kr sktay hn .

// var dulha = "lab";
// var dulhan = "laby";
// dulha = "harry"
// console.log(dulha + " " + "weds" + " " + dulhan);

// const dulha = "lab";
// const dulhan = "laby";
// dulha = "harry" // we can not change the value of dulha as we use const
// console.log(dulha + " " + "weds" + " " + dulhan);

// 3. Hoisting -- Varibale ko bananay sy pehlay use krnay ko hoisting kehtay hn
// variable and functions are hoisted which means thier decleration move on the top of the code
console.log(a);
var a = 45;
var b; // decleration and this will move on top and the value will be undefined 
b=35; // initilization 
// undefind -- have exitance but no value  and not-defined have no existance as well as value 
console.log(c); //  not defined as it does not exist and dont have value too
var c ; // unefined as it exists but dont have value 