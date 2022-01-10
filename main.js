Canvas = document.getElementById("MyCanvas");
ctx= Canvas.getContext("2d");
color = "Black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
Size = document.getElementById("Radius").value;
var width = 2;
Canvas.addEventListener("mousedown",MyMouseDown);
function MyMouseDown(e){
    color = document.getElementById("Colour").value;
    width = document.getElementById("Width").value;
    console.log(color);
    mouseX=e.clientX - Canvas.offsetLeft;

    mouseY=e.clientY - Canvas.offsetTop;
console.log("X= "+ mouseX+" ,Y= " +mouseY);
circle(mouseX,mouseY);
}
function circle(mouseX,mouseY){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    Size = document.getElementById("Radius").value;
    ctx.arc(mouseX, mouseY, Size, 0,2*Math.PI);
    ctx.stroke();

}
function ClearArea(){
    ctx.clearRect(0,0,Canvas.width,Canvas.height);
}