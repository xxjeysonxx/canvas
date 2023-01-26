var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//var color2 = document.getElementById(color_select).value;
var rect = canvas.getBoundingClientRect();
var x = 0, y = 0, dibujando = false, color = "black", grosor = 5;
var inicialX = 0, inicialY = 0, finalX = 0, finalY = 0;


function dibujar(x0, y0, x1, y1) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = grosor;
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.closePath();
}

function dibujarPixel(x, y) {
    let roundedX = Math.round(x);
    let roundedY = Math.round(y);

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(roundedX, roundedY, grosor, grosor);
    ctx.fill();
}

//Limpiar Canvas
function Limpiar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


canvas.addEventListener('mousedown', function (e) {
    inicialX = e.clientX - rect.left;
    inicialY = e.clientY - rect.top;
    dibujando = true;

})

canvas.addEventListener('mousemove', function (e) {
    if (dibujando === true) {

    }
})

canvas.addEventListener('mouseup', function (e) {
    dibujando = false;
    finalX = e.clientX - rect.left;
    finalY = e.clientY - rect.top;
    algoritmo(inicialX, inicialY, finalX, finalY);

})


function algoritmo(x0, y0, x1, y1) { 
    var dx = Math.abs(x1 - x0);
    var dy = Math.abs(y1 - y0);
    var sx = (x0 < x1) ? 1 : -1;
    var sy = (y0 < y1) ? 1 : -1;
    var err = dx - dy;
 
    while(true) {
       dibujarPixel(x0, y0); 
 
       if ((x0 === x1) && (y0 === y1)) break;
       var e2 = 2*err;
       if (e2 > -dy) { err -= dy; x0  += sx; }
       if (e2 < dx) { err += dx; y0  += sy; }
    }
 }