// //callback function

// var butt = document.getElementById("butt");

// butt.onclick = function(){
//     alert("you clicked me!!");
// };
// // here function is a callback function




// //Anonymous function -> function w/o name eg. above functon



// //arrow function

// const fn = function (a , b){
//     return a*b;
// };

// ///lrly

// const fn2 = (a , b) => {
//     return a*b;
// }
// //also equal to
// const fn3 = (a , b) => a*b;
// // if theres only one arguement
// const fn4 = a => a + 100;


// //this keyword

// const myObj = {
//     a:1 , 
//     b:2 , 
//     c: function () {
//         console.log(this);
//     }
// };

// console.log(myObj);

// myObj.c();
// //>{a: 1, b: 2, c: ƒ}


// var aa = myObj.c;
// aa();
// //>Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// //context of this keyword changes accroding to where it is called


// const myObj2 = {
//     a:1 , 
//     b:2 , 
//     c: () => {
//         console.log(this);
//     }
// };

// myObj2.c();
// //>Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// //context of arrow function is the context of the parent fn.
// //since there's no parent fn. here it took the context of the window


// //call fn.

// aa.call(myObj);
// //>{a: 1, b: 2, c: ƒ}
// //> can set context while calling


// //bind f.

// myObj.c = myObj.c.bind(myObj);

// var k = myObj.c;
//  k();
//  //>{a: 1, b: 2, c: ƒ}
// // can bind a context while decalring a fn.



// // call by value /call  by reference

// function one(){
//     var a = 100;
//     two(a);
//     console.log('one' , a);
// }

// function two(a){
//     a=a+1;
//     console.log('two' , a);
// }

// one();
// //> two 101
// //> one 100


// function one(){
//     var a = {
//         value: 100
//     }
//     two(a);
//     console.log('one' , a.value);
// }

// function two(a){
//     a.value = a.value + 1;
//     console.log('two' , a.value);
// }

// one();
// //> two 101
// //> one 101

// function one(){
//     var a = [100];
//     two(a);
//     console.log('one' , a[0]);
// }

// function two(a){
//     a[0] = a[0] + 1;
//     console.log('two' , a[0]);
// }

// one();
// //> two 101
// //> one 101

// ///for small values like integer and floats value is stored in stack memory and functions call value itself so when stack is cleared value is lost
// ///for big values like object and arrays value is stored in heap memory and the reference of these memory locations are stored in stack and functions call these values by reference to their locations heap does not get cleared so value is not lost.



// function one(){
//     var a = {
//         value: 100
//     }
//     two(a);
//     console.log('one' , a.value);
// }

// function two(a){
//     a = {
//         value: 500
//     }
//     console.log('two' , a.value);
// }

// one();
// //> two 500
// //> one 100

///since both are different objects and stored in different heap memory locations stack memory stores differeent references and hence the funtion reads different values


//closure

// function add(a,b){
//     function myAdd() {
//         const c = a+b;
//         return c;
//     }

//     return myAdd;

// }

// function main(){
//     const res = add(3,4);
//     const val = res();
//     console.log(val);
// }

// main();


// function main(a){
//     [1,2,3,4,5,6].forEach(function(i){
//         console.log(i,a);
//     });
// }

// main(10);


var objs = [
    {
        name:'one',
        msg:'Hello I am one'
    },
    {
        name:'two',
        msg:'im 2'

    },
    {
        name:'three',
        msg:'im 3'
    }
];

function main(){
    objs.forEach((item) => {
        const bt = document.createElement('button');
        bt.innerHTML = item.name;
        bt.onclick = getCallBack(item.msg);
        document.body.appendChild(bt);
    });
}

function getCallBack(arg){
    return function(){
        alert(arg)
    }
}

main();
