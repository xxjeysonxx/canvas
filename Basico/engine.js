var canvas=document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var rect=canvas.getBoundingClientRect();
var X=0, y=0, dibujando=false, color='black';

function defcolor(c)
{
    color=c;
}

canvas.addEventListener('mousedown',function(e){
    x=e.clientX - rect.left;
    y=e.clientY - rect.top;
    dibujando = true;
});

canvas.addEventListener('mousemove',function(e){
  if (dibujando===true){
      dibujar(x,y,e.clientX-rect.left,e.clientY-rect.top);
      x=e.clientX - rect.left;
      y=e.clientY - rect.top;
  }
});

canvas.addEventListener('mouseup',function(e){
    if (dibujando===true){
        dibujar(x,y,e.clientX-rect.left,e.clientY-rect.top);
        x=0;
        console.log(X);
        console.log(y);
        y=0;
        dibujando=false;
    }
});

function dibujar(x1,y1,x2,y2)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.moveTo(85,228);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}