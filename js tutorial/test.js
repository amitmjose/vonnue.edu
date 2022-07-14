// alert("hello, world");

// var youlikemeat = true;
// var myNum = 10;

// if (myNum>10){

//     document.write("here's the meat menu...");
    

// } 
// else {
//     document.write("false")
// }



// if-else

// var myAge = 25;

// // AND operator &&

// if (myAge>=18 && myAge<=30){

//     document.write("lets partaayyy.....")

// } else if(myAge<18){
    
//     document.write("go home!!..you're grounded")

// } else{

//     document.write("boo boo boomer...")

// }



// AND operator &&
// // OR operator ||

// if (myAge < 18 || myAge >30 || myAge==25){

//     document.write("go home!!.")

// } else{

//     document.write("lets partaayyy.....")

// }


// // while loop

// var age = 5;

// while(age < 10){

//     console.log("age less than 10");
//     age++;
// }

// document.write("you are no wover 10");




//for loop

// var links= document.getElementsByTagName("a");

// for (i = 1; i <= links.length; i++) {
    
//     console.log("this is link no."  +i);

// }

// document.write("all links now looped")



// // continue break
// for (i = 0; i < 10; i++) {

//     if(i === 3 || i === 5) {
        
//         continue;

//     }   


//     document.write(i);

//     if(i === 7) {

//         break;
//     }
// }
// document.write("loop broken")



//

// var links = document.getElementsByTagName("a");

// for (i = 0; i < links.length; i++){

//     links[i].className = "link" + i;
// }



// //functions

// function getAverage (a,b,c,d,e,f){

//     var average = (a+b+c+d+e+f) / 2;
//     console.log(average);
//     return average;

// }

// var avg = getAverage(7,8,9,2,5,5); 
// document.write("the avg. is" + avg);



// //strings

// var mystring = 'I\'m a "fun" string';
// var space = '----';

// document.write(mystring)
// document.write(space)

// document.write("length of string : " + mystring.length);
// document.write(space);
// document.write("transform to uppercase : " + mystring.toUpperCase());
// document.write(space);
// document.write("transform to lowerrcase : " + mystring.toLowerCase());
// document.write(space);
// document.write("index the letter r : " + mystring.indexOf('r'));


// var s1 = "abc";
// var s2 = 'bcd';
// var s3 = "Abc";
// var s4 = "ABC";
// var s5 = "aBC";


// document.write(s1>s2);
// document.write(s1<s2);
// document.write(s1>s5);
// document.write(s5>s2);
// document.write(s1>s4);
// document.write(s1==s4);




// //slice & split


// var str = "hello , world";

// document.write(str);

// var str2 = str.slice(2 , 10);
// document.write(str2);

// var str3 = str.slice(2);
// document.write ( str3);


// var tags = "meat , ham , salami , pork , beef , chicken";

// document.write(tags);

// var tagsArray = tags.split(",");
// document.write(tagsArray);



// var tags = "meat , ham , salami , pork , beef , chicken";

// console.log(tags);

// var tagsArray = tags.split(",");
// console.log(tagsArray);



// // arrays

// var myArray = [];
// myArray =[10 , 50 , "sdkjdc" , true];


// myArray[0] = 56;

// document.write(myArray);
// myArray[2]= "poda";
// document.write(myArray);

// var myarray2 = new Array();

// var myArray3 = new Array(5);

// document.write(myArray3.length);
 


// // Objects

// var myStr = new String()
// myStr = "asdfjkl;";
// document.write(myStr);


// var myString= "hi there";
// document.write (myString)


// var mycar  = new  Object();
//  mycar.speed = 50;
//  mycar.color = 'red';
//  console.log(mycar.speed);
//  mycar.drive = function(a){
//     document.write("now driving" + a);
//     console.log("now driving" + a);
// };

// mycar.drive();
// document.write(mycar.drive("fast"));


// var myCar2 = {
//     maxSpeed: 50 , 
//     driver : "kuttu" , 
//     drive : function(){
//         console.log("now driving");
//     } , 
//     distance : function(speed , time){
//         console.log("distance travelled : " + speed*time);
//     }
// };

// console.log(myCar2.maxSpeed);
// myCar2.drive();
// myCar2.distance(50 , 20);




// // this keyword



// var myCar = {
//     maxSpeed: 30 , 
//     driver : "kuttu" , 
//     driverName : function (){
//         console.log("name is " + this.driver);
//     }
// };

// var myCar2 = {
//     maxSpeed: 50 , 
//     driver : "daku" , 
//     driverName : function (){
//         console.log("name is " + this.driver);
//     }
// };


// myCar2.driverName();
// myCar.driverName();
 

// // Constructor Function


// var myString = new String();

// var Car = function(maxSpeed, driver) {
    
//     this.maxSpeed = maxSpeed;
//     this.driver = driver;
//     this.drive = function( speed , time){
//         console.log(speed*time);
//     };
//     this.logDriver = function(){
//         console.log("driver name is "+ this.driver);
//     };
// } 
// var myCar = new Car(50 , "suku");
// var myCar2 = new Car(5 , "lkfsx");
// var myCar3 = new Car(75 , "sshrg");


// myCar.drive(30 , 5);
// myCar3.logDriver();



// // Date object

// var myDate = new Date();
// console.log(myDate);


// var oldDate = new Date(1789 , 10 , 20);
// var newDate = new Date(1999 , 10 , 20);
// console.log( oldDate , newDate  )

// var birthday = new Date(1986 , 0 , 15 , 11 , 15 , 25);
// var birthday2 = new Date(1986 , 0 , 15 , 11 , 15 , 25);

// console.log(birthday.getMonth());
// //month of the date (0-11)

// console.log(birthday.getFullYear());
// //year(YYYY)

// console.log(birthday.getDate());
// //date of month (1-31)

// console.log(birthday.getDay());
// // day of week (0-6)

// console.log(birthday.getHours());
// //hour of the date (0-23)

// console.log(birthday.getTime());
// //no. of milliseconds since 1st jan 1970



// if (birthday == birthday2){
//     console.log("bithdays are equal");
// } else{
//     console.log("birthdays are not equal");
// }
// //not equal bcoz both are different objects

// if (birthday.getTime() == birthday2.getTime()){
//     console.log("bithdays are equal");
// } else{
//     console.log("birthdays are not equal");
// }
// // equal bcoz getTime() outs value


//DOM

//Document Object Model   

// document.getElementsByClassName("content");
// //creates an array of all elements with class name : content

// var myContentDivs = document.getElementsByClassName("content");

// console.log(myContentDivs);
// document.write(myContentDivs);

// var myH2 = myContentDivs[0].getElementsByTagName("h2");
// console.log (myH2);

// myH2[0].innerHTML = "yeeaa";

// var myID = document.getElementById("link");
// console.log(myID);

// var myBody = document.getElementsByClassName("page-body");

// console.log(myBody);
// myBody[0].innerHTML = "<p> helo </p>";

// var myTitle = document.getElementById("tuto");

// console.log(myTitle);

// console.log(myTitle.textContent);

// myTitle.textContent = "changed using DOM";

// console.log(myTitle.textContent);



// changing element attributes

// var link = document.getElementById("test");

// console.log(link);
// console.log(link.getAttribute("href"));

// console.log(link.getAttribute("class"));

// console.log(link.setAttribute("class" , "pie"));

// console.log(link.setAttribute("alt" , "hello"));

// console.log(link.className);

// console.log(link.className = "nionja");

// console.log(link.href);

// console.log(link.style);


// //changing styles 


// var link = document.getElementById("tuto");

// link.setAttribute("style" ,"color: red;");
// link.style.color = "green";
// link.style.marginLeft = "30px";
// link.style.backgroundColor = "red";
// link.style.height = "50px";




// //adding elements to DOM

// var newLi = document.createElement("li");

// console.log(newLi);

// var newA = document.createElement("a");

// console.log(newA);

// var menu = document.getElementById("page").getElementsByTagName("ul")[0];

// console.log(menu);

// menu.appendChild(newLi);

// newLi.appendChild(newA);

// newA.innerHTML = "ntheeee";

// menu.insertBefore(newLi , menu.getElementsByTagName("li")[0]);

// menu.insertBefore(newLi , menu.getElementsByTagName("li")[2]);




// //removing elements from dom 

// var parent = document.getElementById("page").getElementsByTagName("ul")[0];

// console.log(parent);

// var child = parent.getElementsByTagName("li")[0];

// console.log(child);
// var removed = parent.removeChild(child);

// parent.appendChild(removed);




//Events



// // alert("hey");

// var title = document.getElementById("tuto");

// title.onclick = function(){
//     alert("you clicked me");
// }
// title.onmouseover = function(){
//     alert("you hovered me");
// }

