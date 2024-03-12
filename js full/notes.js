// JAVA SCRIPT NOTES 


//1) ways to print in java script
//console.log("this is java script");
// alert("started js language");
//document.write("this is document")

//2) java script console Api
//console.log("hello world", 4+6 ,  "another log");
//console.warn("this is a warning");  //yellow color
//console.errror("this is an error");  //red color

//3) java script variables
//containers to store data variable
var number1 = 34;
var number2 = 56;
//console.log(number1 + number2);

//4)data types in java script
/* At a very high level there are 2 types of data types 
 1) primitive data types= numbers,boolens,string,undefined,null,Symbol
 2) reference data types=arrays,objects */

//a.number
var number1 = 45;
var number2 = 67;

//b.string
var str1 = "this is a string";
var str2 = "this is another string";

//c.object
var marks = {
    x: 34,
    y: 45,
    z: 56,
}
// console.log(marks)

//d.boolean
var a = true;
var b = false;
//console.log(a);

//e.undefined
var und;
var n = null;
//console.log (und);

//f.array
var arr = [1, 2, 3, "aryan", 4, 5]

//5)Operators

// Arthematic operators
var a = 57;
var b = 5;
/* console.log("the value of a+b is ",a+b);
 console.log("the value of a-b is ",a-b);
 console.log("the value of a*b is ",a*b);
 console.log("the value of a/b is ",a%b); */

// Assingmemt operators
/*var c=a;
c+=2
console.log(c)
c*=2
console.log(c)*/

//comparrison operators
/*var x= 45;
var y=67
console.log(x==y)
console.log(x>y)*/

//logical operators
/*1.logical and 
 console.log( true && true);
 console.log(true && false);
 console.log(false && true);
 console.log(false && false);
 2.logical or 
 console.log( true || true);
 console.log(true || false);
 console.log(false || true);
 console.log(false || false);
 3.logical Not
 console.log (!true)
 console.log(!false)*/

//6)functions
// function avg(a, b) {
//     return (a + b) / 2
// }
// c1 = avg(10, 20)
// c2 = avg(13, 14)
//console.log(c1,c2)

//7)conditional statements
// var age= 18;
// if (age>=18){
// console.log("the user can drive car");
// }
// else{
// console.log("the user cant drive");
// }

// var marks = 98;
// if (marks > 90){
//     console.log("student passed with flying colors")
// }
// else if ( marks > 60){
//     console.log(" student passed his exam");
// }
// else{
//     console.log("student failed his exams")
// }

//8) Loop statements
var arr = [1, 2, 3, 4, 5];
// console.log(arr[4])
//    for(  var i=0; i<arr.length; i++){
    // if i==2;{
    //     break;
    //     continue;
    // }
//     console.log(arr[i])
//    }
// arr.forEach(function(element){
//     console.log(element)
// }) 

//  let j = 0;
//  while (j<arr.length);{
//  console.log(arr[j])
//     j++}

// do{
//     console.log(arr[j]);
//     j++;
// }while (j<arr.length);

//9) Array mathods 
//  myarr = [ "aryan", "luffy" , 'array' , 67];
//  console.log(myarr.length);
//  myarr.pop();
//  console.log(myarr); 
// myarr.shift();
// console.log(myarr); 
// myarr.push("css");
// console.log(myarr);
// myarr.unshift("john cena");
// console.log(myarr);

// 10) String methods
// let mystring = "next language is react language";
// console.log(mystring.length);
// console.log(mystring.indexOf("react"));
// console.log(mystring.lastIndexOf("language"));
// console.log(mystring.slice(0,7))
// d = mystring.replace("react" , "java");
// console.log( d , mystring)

// 11) Date method
// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate);
// console.log(myDate.getDay());

// 12) Document object manupilation
//document.getElementById('click').style.border = '2px solid blue'
//'2px solid blue'
let elem = document.getElementById('click');
//console.log(elem);
let elemclass = document.getElementsByClassName('container');
//console.log(elemclass);
//elemclass[0].style.background = "black"
//elemclass[1].style.fontSize = '100px';
// elemclass[0].classList.add("aryan")
// elemclass[0].classList.add("text-success")
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);
tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "my name is Aryan"
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "my name is luffy";
// tn[0].replaceChild(createdElement2,createdElement)
// tn[0].removechild(createdElement2);
//  qr= document.querySelector('.container');
//  console.log(qr);
// qrr = document.querySelectorAll('.container');
// console.log(qrr);

// 13) Events
// function clicked(){
//     console.log("the button was clicked")
// }
//     window.onload = function(){
//         console.log("the document was loaded")
//     }
// firstcontainer.addEventListener('click',function()
// {
// console.log("the container was clicked");
// })
// firstcontainer.addEventListener('mouseover',function()
// {
//     console.log("mouse was on the container")
// })
// firstcontainer.addEventListener('mouseout',function()
// {
//     console.log("the mouse was outside the container")
// })
// firstcontainer.addEventListener('mouseup',function()
// {
//     console.log("mouse up when clicked on container")
// })
// firstcontainer.addEventListener('mousedown',function()
// {
//     console.log("mouse down when clicked on container")
// })
// firstcontainer.addEventListener('click',function()
// {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>tbh this is boring</b>"
//     console.log("clicked on container")
// })

// 14) arrow function
// function summ(a, b){
//     return a+b;
// }
// summ = (a ,b)=>{
//     return (a+b);
// }

// 14)set timeout and seet interval
logkaro = ()=>{
    console.log("u r fired");
}
// setTimeout(logkaro,5000);
// setInterval(logkaro,7000);

// 15) java script local storage
localStorage.setItem('aryan', 'mamania')
localStorage.getItem('aryan')
localStorage.removeItem('aryan');
localStorage.clear()


// 16) Json
obj= {name: "luffy" , surname: "mamania", a:{this : 'luf\\"fy'}};
jso= JSON.stringify(obj);
console.log(typeof jso);
console.log(jso)
paras = JSON.parse(`{"name": "aryan", "surname" : "mamania"}`)
console.log(paras);


//  const is used for constant and its value cant be changed and let is used when value can be changed // 