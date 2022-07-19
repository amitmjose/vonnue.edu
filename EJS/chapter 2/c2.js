// let ten = 10;

// console.log(ten*ten);
// //>100


// let mood = "light";
// console.log(mood);
// //>light
// mood = "dark";
// console.log(mood);
// //>dark


// let debt = 140;

// debt = debt - 35;
// console.log(debt);
// //>105


// let one = 1 , two = 2;
// console.log(one + two);
// //> 3

// var names = "Suku";
// const greeting = "Hi";
// console.log(greeting + names);
// //> HiSuku


// ////fookoo

// // let X = 0;

// // function foo() {

// //     console.log("inside foo");

// //     if(X >= 10){
// //         console.log("loop completed inside foo. X = " , X)
// //     } 
// //     else{
// //     X++;
// //     koo(X);
// //     }

// // }

// // function koo(){

// //     console.log("inside koo");


// //     if(X >= 10){
// //         console.log("loop completed inside koo. X = " , X)
// //     }
// //     else{
// //     X++;
// //     foo(X);
// //     }

// // }  

// // foo();

// //prompt("enter passcode")

// //CONSOLE.LOG

// let x = 30;

// console.log("the value of X is " , x);
// //> the value of X is 30

// console.log(Math.max(3 , 7));
// //> 7

// console.log(Math.min(2,4)+ 100);
// //> 102

// let theNumber = Number(prompt("pick a no."));
// console.log("your no is the square root of " + theNumber*theNumber);



//conditional statements

// let theNumber = Number(prompt("pick a no."));

// if (!Number.isNaN(theNumber)){
//     console.log("yr no is the sqr root of "  + theNumber*theNumber);
// } else{
//     console.log("NAN");
// }


// let num = Number(prompt("pick any no."));

// if (num < 10){
//     console.log('Small');
// } else if (num < 100){
//     console.log("Medium");
// }else {
//     console.log("Large");
// }


// let num = 0;
// while (num <= 12){
//     console.log(num);
//     num = num+2;
// }
// //> 0- 12



// let result = 1;
// let counter = 0;

// while (counter< 10){
//     result = result* 2;
//     counter = counter + 1;
// }
// console.log(result);



// //do-while loop

// let yrName;

// do {
//     yrName = prompt("who r u?");
// } while (!yrName);
// console.log(yrName);

// if (false != true){
//     console.log("That makes sense.");
//     if (1<2){
//         console.log("no surprise there.");
//     }
// }


// for (let num = 0; num <= 12; num = num + 2){
//     console.log(num);
// }
// //> 0-12

// let res = 1;

// for (let count = 0; count < 10; count = count + 1){
//     res =res*2;
// }
// console.log(res);
// //>1024

// for (let current = 15 ; ; current = current + 1){
//     console.log(current);
//     if(current % 7 == 0){
//         console.log(current);
//         break;
//     }
// }

// for (let num = 0; num <= 12; num += 2){
//     console.log(num);
// }



//switch

// if (x == "value 1") action1();
// else if (x == "value 2") action2();
// else if (x == "value 3") action3();
// else defaultAction();



//in js switch>

// switch (prompt("What is the weather like?")){

//     case "rainy":
//         console.log("remember to bring umbrella.");
//         break;
//     case "sunny":
//         console.log("Dress Lightly.");
//     case "cloudy":
//         console.log("Go out.");
//         break;
//     default:
//         console.log("Unknown weather type.");
//         break;
// }





//EXERCICES


//1.
// let a = "#";

// for( let i =0; i < 7;i++){
//     console.log(a);
//     a += "#";
// }


//2.

// for (let j=1; j<=100; j++){

//     if(j % 5 == 0 && j % 3 == 0){
//         console.log("fizzbuzz")
    
//     }else if(j % 5 == 0 && j % 3 !== 0){
//         console.log("buzz")
//     }
//     else if(j % 3 == 0){
//         console.log("fizz");
//     }
//     else {
//         console.log(j)
//     }
    
// }

//3.
for (i = 0; i <8 ; i++){
    if(i % 2 ==0){
        let m =" ";
        for(let l=1; l<=8; l++){
            if(l % 2 ==0){
                m += "#";
            }else{
                m+= " ";
            }
        }
        console.log(m);
    }else{
        let m =" ";
        for(let l=1; l<=8; l++){
            if(l % 2 ==0){
                m += " ";
            }else{
                m+= "#";
            }
        }
        console.log(m);
    }
}

