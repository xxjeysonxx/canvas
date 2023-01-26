var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var rect = canvas.getBoundingClientRect();
var x=0, y=0, dibujando=false, color='purple', grosor=5;
var inicialX=0, inicialY=0, finalX=0, finalY=0;

function dibujar(x0,y0,x1,y1){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = grosor;
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.closePath();
}

function dibujarPixel(x,y){
    let roundedX = Math.round(x);
    let roundedY = Math.round(y);

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(roundedX,roundedY, grosor, grosor);
    ctx.fill();
}

//Limpiar Canvas
function Limpiar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


canvas.addEventListener('mousedown', function(e){
            inicialX = e.clientX-rect.left;
            inicialY = e.clientY-rect.top;
            dibujando = true; 
        
})

canvas.addEventListener('mousemove', function(e){
            if(dibujando===true){
                // Limpiar();
                // dibujar(inicialX, inicialY, e.clientX-rect.left, e.clientY-rect.top);        // <=== Para previsualizar la linea antes de dibujarla
            }
})

canvas.addEventListener('mouseup', function(e){
            dibujando = false;
            finalX = e.clientX-rect.left;
            finalY = e.clientY-rect.top;
            algoritmo(inicialX,inicialY,finalX,finalY);   

})


function algoritmo(x0,y0,x1,y1){
    let m, b, Dx, Dy;

    Dx = x1 - x0;
    Dy = y1 - y0;

    if (Math.abs(Dx) > Math.abs(Dy)){           // Pendiente < 1
        m = Dy/Dx;
        b = y0 - (m*x0);
        if(Dx<0){
            Dx = -1;
        }
        else{
            Dx = 1;
        }
        while(x0 != x1){
            x0 += Dx;
            y0 = Math.round(m*x0 + b);
            dibujarPixel(x0,y0);
        } 
    }
    else if(Dy != 0){                           // Pendiente >= 1   
        m = Dx/Dy;
        b = x0 - (m*y0);
        if(Dy<0){
            Dy = -1;
        }
        else{
            Dy = 1;
        }
        while(y0 != y1){
            y0 += Dy;
            x0 = Math.round(m*y0 + b);
            dibujarPixel(x0,y0);
        }
    }
}
