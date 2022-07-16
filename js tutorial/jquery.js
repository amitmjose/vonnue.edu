var myPara = $("#content p:last-child");

myPara.addClass("test");
myPara.removeClass("test");

myPara.fadeOut();
myPara.fadeIn();

myPara.css({position : "relative" , color: "red"});


myPara.animate({left: "50px"});