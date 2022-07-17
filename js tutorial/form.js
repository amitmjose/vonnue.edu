var myForm = document.forms.myForm;

console.log(myForm);
console.log(myForm.name);

console.log(myForm.name.value);
myForm.colour.value;


myForm.name.onfocus = function(){

    myForm.name.style.border = "4px solid red";
};

myForm.name.onblur = function(){

    myForm.name.style.border = "none";
    myForm.name.style.backgroundColor = "teal";
};



sughallce'

var message = document.getElementById("message");

myForm.onsubmit = function(){

    if(myForm.name.value == ""){
        message.innerHTML = "! please enter name";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }
};