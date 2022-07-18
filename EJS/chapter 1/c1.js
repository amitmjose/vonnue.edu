console.log("A newline charechter is written like \"\\n\".");
//>A newline charechter is written like "\n".




//bactick quotes 

console.log(`half of 100 is ${100/2}`);
// ${} -> template literals
//>half of 100 is 50



//unary operators

console.log(typeof 4.5);
//>number
console.log(typeof "x");
//>string

console.log( - (10 - 2));
//>-8




//comparison

console.log(3>2);
//>true
console.log(3<2);
//>false

console.log("Ardvark" < "Zoroaster");
//>true

console.log("Itchy" != "Scratchy");
//>true
console.log("Apple" == "Orange");
//>false




//Logical Operators

console.log(true && false);
//>false
console.log(true && true);
//>true

console.log(false || true);
//>true
console.log(false || false);
//>false


console.log(true ? 1 : 2);    ///ternary operators
//>1
console.log(false ? 1 : 2);
//>2



//automatic type conversion

console.log(8*null);
//>0
console.log("5" - 1);
//>4
console.log("5" + 1);
//>51
console.log("five" * 2);
//>NaN
console.log(false == 0);
//>true
 
console.log(null == undefined); 
//>true
console.log(null == 0);
//>false

console.log(null || "user");
//>user
console.log("Agnes" || "user");
//>Agnes
