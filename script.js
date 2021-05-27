var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;
ctx.rect(250,100,500,300);
ctx.stroke();

function draw(){
    circle(350,200,50,"blue");
    circle(500,200,50,"black");
    circle(650,200,50,"red");
    circle(425,270,50,"green");
    circle(575,270,50,"yellow");
}

function circle(x,y,r,c){
 ctx.beginPath();
 ctx.strokeStyle = c;
 ctx.lineWidth = 2.5;
 ctx.arc(x,y,r,0,360);
 ctx.stroke(); 
}