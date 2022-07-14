var content = document.getElementById("wbc-jsoc");
var button = document.getElementById("wf-jsoc");
var butt = document.getElementById("butt-content");

button.onclick = function(){

    if(content.className == "open"){
        content.className = "close";
        butt.innerHTML = "Read More";
    } else{
        content.className = "open";
        butt.innerHTML = "Read Less";
    }

}





var content2 = document.getElementById("csw-jsoc");
var button2 = document.getElementById("wf2-jsoc");
var butt2 = document.getElementById("butt2");

button2.onclick = function(){

    if(content2.className == "open"){
        content2.className = "close";
        butt2.innerHTML = "See More";
    } else{
        content2.className = "open";
        butt2.innerHTML = "See Less";
    }

}





var content3 = document.getElementById("csw2-jsoc");
var button3 = document.getElementById("wf3-jsoc");
var butt3 = document.getElementById("butt3");

button3.onclick = function(){

    if(content3.className == "open"){
        content3.className = "close";
        butt3.innerHTML = "Read More";
    } else{
        content3.className = "open";
        butt3.innerHTML = "Read Less";
    }

}