function draw() {
    let rectangles = document.getElementById('rectangles');

    if (rectangles.getContext) {
        let ctx = rectangles.getContext('2d');

        //all three rectangle functions draw immediately to the canvas.
        //Draws a filled rectangle.
        ctx.fillRect(25, 25, 100, 100);
        //Clears the specified rectangular area, making it fully transparent.
        ctx.clearRect(45, 45, 60, 60);
        //Draws a rectangular outline.
        ctx.strokeRect(50, 50, 50, 50);
    }

    let triangle = document.getElementById('triangle');

    if (triangle.getContext) {
        let ctx = triangle.getContext('2d');

        //Creates a new path. Once created, future drawing commands are 
        //directed into the path and used to build the path up.
        ctx.beginPath();
        //set your starting position
        //Moves the pen to the coordinates specified by x and y.
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        //When you call fill(), any open shapes are closed automatically, 
        //so you don't have to call closePath()
        ctx.fill();
    }

    let smileyFace = document.getElementById('smiley-face');

    if (smileyFace.getContext) {
        let ctx = smileyFace.getContext('2d');
        
        ctx.beginPath(); //Creates a new path.

        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle        
        ctx.moveTo(110, 75); //Moves the pen
        ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
    }

    let triangles = document.getElementById('triangles');

    if (triangles.getContext) {
        let ctx = triangles.getContext('2d');
        
        // Filled triangle
        ctx.beginPath();
        ctx.moveTo(25, 25);  //Move the starting point to the desired position
        ctx.lineTo(105, 25); //Draws a line from the current drawing position to the position specified by x and y.
        ctx.lineTo(25, 105); //Draws a line from the current drawing position to the position specified by x and y.
        ctx.fill(); //shapes are automatically closed when a path is filled

        // Stroked triangle
        ctx.beginPath();
        ctx.moveTo(125, 125);//Move the starting point to the desired position
        ctx.lineTo(125, 45); //Draws a line from the current drawing position to the position specified by x and y.
        ctx.lineTo(45, 125); //Draws a line from the current drawing position to the position specified by x and y.
        ctx.closePath(); //Because is not automatically closed
        ctx.stroke();
    }

    let arcs = document.getElementById('arcs');

    if (arcs.getContext) {
        let ctx = arcs.getContext('2d');
        
        //To draw arcs or circles, we use the arc() or arcTo() methods.
        //arc(x, y, radius, startAngle, endAngle, anticlockwise)
        //arcTo(x1, y1, x2, y2, radius)

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                ctx.beginPath();

                var x = 25 + j * 50; // x coordinate
                var y = 25 + i * 50; // y coordinate
                var radius = 20; // Arc radius
                var startAngle = 0; // Starting point on circle
                var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
                var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise
        
                ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        
                if (i > 1) {
                    ctx.fill();
                } else {
                    ctx.stroke();
                }
            }
        }
    }

    let qBezier = document.getElementById('q-bezier');

    if (qBezier.getContext) {
        let ctx = qBezier.getContext('2d');
        
        //Draws a quadratic Bézier curve from the current pen position to 
        //the end point specified by x and y, using the control point 
        //specified by cp1x and cp1y.
        //quadraticCurveTo(cp1x, cp1y, x, y)

        //Draws a cubic Bézier curve from the current pen position to the 
        //end point specified by x and y, using the control points specified 
        //by (cp1x, cp1y) and (cp2x, cp2y).
        //bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

        // Quadratric curves example
        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);
        ctx.stroke();
    }

    let cBezier = document.getElementById('c-bezier');

    if(cBezier.getContext) {
        let ctx = cBezier.getContext('2d');

        // Cubic curves example
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();
    }

    let pacman =  document.getElementById('packman');

    if(pacman.getContext) {
        let ctx = pacman.getContext('2d');

        roundedRect(ctx, 12, 12, 150, 150, 15);
        roundedRect(ctx, 19, 19, 150, 150, 9);
        roundedRect(ctx, 53, 53, 49, 33, 10);
        roundedRect(ctx, 53, 119, 49, 16, 6);
        roundedRect(ctx, 135, 53, 49, 33, 10);
        roundedRect(ctx, 135, 119, 25, 49, 10);

        ctx.beginPath();
        ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
        ctx.lineTo(31, 37);
        ctx.fill();

        for (var i = 0; i < 8; i++) {
            ctx.fillRect(51 + i * 16, 35, 4, 4);
        }

        for (i = 0; i < 6; i++) {
            ctx.fillRect(115, 51 + i * 16, 4, 4);
        }

        for (i = 0; i < 8; i++) {
            ctx.fillRect(51 + i * 16, 99, 4, 4);
        }

        ctx.beginPath();
        ctx.moveTo(83, 116);
        ctx.lineTo(83, 102);
        ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
        ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
        ctx.lineTo(111, 116);
        ctx.lineTo(106.333, 111.333);
        ctx.lineTo(101.666, 116);
        ctx.lineTo(97, 111.333);
        ctx.lineTo(92.333, 116);
        ctx.lineTo(87.666, 111.333);
        ctx.lineTo(83, 116);
        ctx.fill();

        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(91, 96);
        ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
        ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
        ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
        ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
        ctx.moveTo(103, 96);
        ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
        ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
        ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
        ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
        ctx.fill();

        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();
    }

    let path2d = document.getElementById('path2d');

    if(path2d.getContext) {
        let ctx = path2d.getContext('2d');
        
        var rectangle = new Path2D();  // empty path object
        rectangle.rect(10, 10, 50, 50);

        var circle = new Path2D();  // empty path object
        circle.moveTo(125, 35);
        circle.arc(100, 35, 25, 0, 2 * Math.PI);

        ctx.stroke(rectangle); //used with a path argument to draw both objects onto the canvas
        ctx.fill(circle); //used with a path argument to draw both objects onto the canvas
    }

    let path2dSvg = document.getElementById('path2d-svg');

    if(path2dSvg.getContext) {
        let ctx = path2dSvg.getContext('2d');

        var p = new Path2D('M10 10 h 80 v 80 h -80 Z'); //path from SVG path data
        ctx.stroke(p);
    }
}

// A utility function to draw a rectangle with rounded corners.
function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
}