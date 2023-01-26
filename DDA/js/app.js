var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var rect = canvas.getBoundingClientRect();
var x = 0, y = 0, dibujando = false, color = 'purple', grosor = 5;
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


function algoritmo(x1, y1, x2, y2) {
    let dx = 0;
    let dy = 0;
    let steps = 0;
    dx = x2 - x1;
    dy = y2 - y1;
    let x_inc=0;
    let y_inc=0;
    if ((Math.abs(dx)) >= (Math.abs(dy))) {
        steps = dx;
    } else {
        steps = dy;
    }
    x_inc = dx / steps;
    y_inc = dy / steps;

    let x=x1;
    let y=y1;

    for(let i=1; i<=steps; i++){
        dibujarPixel(x,y);
        x=x+x_inc;
        y=y+y_inc;

    }

}
