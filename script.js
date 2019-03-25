var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100,70, 60, 0, 2*Math.PI);
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();


ctx.rect(30, 0, 150, 150);
ctx.stroke(); 


ctx.font = "30px Arial";
ctx.strokeText("SMILE!", 50, 150);
        

ctx.beginPath();
ctx.arc(100,90, 20, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(80,60, 12, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(120,60, 12, 0, 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.arc(80,60, 3, 0, 2*Math.PI);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

ctx.beginPath();
ctx.arc(120,60, 3, 0, 2*Math.PI);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();





