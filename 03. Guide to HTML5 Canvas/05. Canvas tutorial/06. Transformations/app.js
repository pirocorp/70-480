(function () {
    var ctx = document.getElementById('state').getContext('2d');

    ctx.fillRect(0, 0, 150, 150);   // Draw a rectangle with default settings
    ctx.save();                     // Save the default state

    ctx.fillStyle = '#09F';         // Make changes to the settings
    ctx.fillRect(15, 15, 120, 120); // Draw a rectangle with new settings
    ctx.save();                     // Save the current state

    ctx.fillStyle = '#FFF';         // Make changes to the settings
    ctx.globalAlpha = 0.5;
    ctx.fillRect(30, 30, 90, 90);   // Draw a rectangle with new settings

    ctx.restore();                  // Restore previous state
    ctx.fillRect(45, 45, 60, 60);   // Draw a rectangle with restored settings

    ctx.restore();                  // Restore original state
    ctx.fillRect(60, 60, 30, 30);   // Draw a rectangle with restored settings

})();

(function () {
    var ctx = document.getElementById('translate').getContext('2d');
    //translate(x, y) Moves the canvas and its origin on the grid. x indicates the horizontal distance to move, and y indicates how far to move the grid vertically.
    //It's a good idea to save the canvas state before doing any transformations.

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            ctx.save();
            ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
            ctx.translate(10 + j * 50, 10 + i * 50);
            ctx.fillRect(0, 0, 25, 25);
            ctx.restore();
        }
    }
})();

(function () {
    var ctx = document.getElementById('rotate').getContext('2d');

    // left rectangles, rotate from canvas origin
    ctx.save();

    // blue rect
    ctx.fillStyle = '#0095DD';
    ctx.fillRect(30, 30, 100, 100);

    //Rotate Canvas
    ctx.rotate((Math.PI / 180) * 25);

    // grey rect
    ctx.fillStyle = '#4D4E53';
    ctx.fillRect(30, 30, 100, 100);

    //Restore State
    ctx.restore();

    // right rectangles, rotate from rectangle center
    // draw blue rect
    ctx.fillStyle = '#0095DD';
    ctx.fillRect(150, 30, 100, 100);  

    ctx.translate(200, 80); // translate to rectangle center 
                            // x = x + 0.5 * width
                            // y = y + 0.5 * height
    ctx.rotate((Math.PI / 180) * 25); // rotate
    ctx.translate(-200, -80); // translate back

    // draw grey rect
    ctx.fillStyle = '#4D4E53';
    ctx.fillRect(150, 30, 100, 100);
})();

(function () {
    var ctx = document.getElementById('scale').getContext('2d');
    //scale(x, y) Scales the canvas units by x horizontally and by y vertically. 

    // draw a simple rectangle, but scale it.
    ctx.save();
    ctx.scale(10, 3);
    ctx.fillRect(1, 10, 10, 10);
    ctx.restore();

    // mirror horizontally
    ctx.scale(-1, 1);
    ctx.font = '48px serif';
    ctx.fillText('MDN', -135, 120);
})();

(function () {
    var ctx = document.getElementById('transform').getContext('2d');
    //transform(a, b, c, d, e, f)
    //a (m11) Horizontal scaling.
    //b(m12) Horizontal skewing.
    //c(m21) Vertical skewing.
    //d(m22) Vertical scaling.
    //e(dx) Horizontal moving.
    //f(dy) Vertical moving.

    //setTransform(a, b, c, d, e, f) This basically undoes the current transformation, then sets the specified transform, all in one step.

    //resetTransform() This is the same as calling: ctx.setTransform(1, 0, 0, 1, 0, 0);

    var sin = Math.sin(Math.PI / 6);
    var cos = Math.cos(Math.PI / 6);
    ctx.translate(100, 100);
    var c = 0;
    for (var i = 0; i <= 12; i++) {
        c = Math.floor(255 / 12 * i);
        ctx.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')';
        ctx.fillRect(0, 0, 100, 10);
        ctx.strokeRect(0, 0, 100, 10)
        ctx.transform(cos, sin, -sin, cos, 0, 0);
    }

    ctx.setTransform(-1, 0, 0, 1, 100, 100);
    ctx.fillStyle = 'rgba(255, 128, 255, 0.5)';
    ctx.fillRect(0, 50, 100, 100);
})();