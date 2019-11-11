const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawHouse(ctx) {
    // Set line width
    ctx.lineWidth = 10;

    // Wall
    ctx.strokeRect(75, 140, 150, 110);

    // Door
    ctx.fillRect(130, 190, 40, 60);

    // Roof
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();
};

function test(ctx) {
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(5, 50);
    ctx.bezierCurveTo(30, 30, 130, 530, 200, 100);
    ctx.stroke();
};

function clearCanvas(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};


function drawRandomRect(ctx) {
    const currentRectSize = 1

    const x = Math.floor(Math.random() * (canvas.width - currentRectSize));
    const y = Math.floor(Math.random() * (canvas.height - currentRectSize));
    
    let red = Math.floor(Math.random() * 255).toString(16);
    let green = Math.floor(Math.random() * 255).toString(16);
    let blue = Math.floor(Math.random() * 255).toString(16);

    ctx.fillStyle = `#${red}${green}${blue}`;

    ctx.fillRect(x, y, currentRectSize, currentRectSize);
};

const html = document.querySelector('html');
html.addEventListener('mousemove', () => drawRandomRect(ctx));

setInterval(function(){
    for (let i = 0; i < 1000; i++) {
        drawRandomRect(ctx);
    }
}, 40);


