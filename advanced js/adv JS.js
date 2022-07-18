//callback function

var butt = document.getElementById("butt");

butt.onclick = function(){
    alert("you clicked me!!");
};
// here function is a callback function




//Anonymous function -> function w/o name eg. above functon



//arrow function

const fn = function (a , b){
    return a*b;
};

///lrly

const fn2 = (a , b) => {
    return a*b;
}
//also equal to
const fn3 = (a , b) => a*b;
// if theres only one arguement
const fn4 = a => a + 100;


//this keyword

const myObj = {
    a:1 , 
    b:2 , 
    c: function () {
        console.log(this);
    }
};

console.log(myObj);

myObj.c();
//>{a: 1, b: 2, c: ƒ}


var aa = myObj.c;
aa();
//>Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//context of this keyword changes accroding to where it is called


const myObj2 = {
    a:1 , 
    b:2 , 
    c: () => {
        console.log(this);
    }
};

myObj2.c();
//>Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//context of arrow function is the context of the parent fn.
//since there's no parent fn. here it took the context of the window


//call fn.

aa.call(myObj);
//>{a: 1, b: 2, c: ƒ}
//> can set context while calling


//bind f.

myObj.c = myObj.c.bind(myObj);

var k = myObj.c;
 k();
 //>{a: 1, b: 2, c: ƒ}
// can bind a context while decalring a fn.

