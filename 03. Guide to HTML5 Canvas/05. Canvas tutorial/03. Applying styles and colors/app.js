//fillStyle = color -> Sets the style used when filling shapes.
//strokeStyle = color -> Sets the style for shapes' outlines.  

// these all set the fillStyle to 'orange'
//ctx.fillStyle = 'orange';
//ctx.fillStyle = '#FFA500';
//ctx.fillStyle = 'rgb(255, 165, 0)';
//ctx.fillStyle = 'rgba(255, 165, 0, 1)';

(function() {
    var ctx = document.getElementById('colors').getContext('2d');

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                            Math.floor(255 - 42.5 * j) + ', 0)';
            ctx.fillRect(j * 25, i * 25, 25, 25);
        }
    }
})();

(function() {
    var ctx = document.getElementById('stroke-style').getContext('2d');

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
          ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + 
                           Math.floor(255 - 42.5 * j) + ')';
          ctx.beginPath();
          ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
          ctx.stroke();
        }
      }
})();

(function() {
    var ctx = document.getElementById('transparency').getContext('2d');

    // Assigning transparent colors to stroke and fill style
    //ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
    //ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';

    // draw background
    ctx.fillStyle = '#FD0';
    ctx.fillRect(0, 0, 75, 75);
    ctx.fillStyle = '#6C0';
    ctx.fillRect(75, 0, 75, 75);
    ctx.fillStyle = '#09F';
    ctx.fillRect(0, 75, 75, 75);
    ctx.fillStyle = '#F30';
    ctx.fillRect(75, 75, 75, 75);
    ctx.fillStyle = '#FFF';

    // set transparency value
    ctx.globalAlpha = 0.2; //Applies the specified transparency value to all future shapes drawn on the canvas.
    
    // Draw semi transparent circles
    for (var i = 0; i < 7; i++) {
        ctx.beginPath();
        ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
        ctx.fill();
    }
})();

(function() {
    var ctx = document.getElementById('transparency-rgba').getContext('2d');
    
    // Draw background
    ctx.fillStyle = 'rgb(255, 221, 0)';
    ctx.fillRect(0, 0, 150, 37.5);
    ctx.fillStyle = 'rgb(102, 204, 0)';
    ctx.fillRect(0, 37.5, 150, 37.5);
    ctx.fillStyle = 'rgb(0, 153, 255)';
    ctx.fillRect(0, 75, 150, 37.5);
    ctx.fillStyle = 'rgb(255, 51, 0)';
    ctx.fillRect(0, 112.5, 150, 37.5);

    // Draw semi transparent rectangles
    for (var i = 0; i < 10; i++) {
        ctx.fillStyle = 'rgba(255, 255, 255, ' + (i + 1) / 10 + ')';
        
        for (var j = 0; j < 4; j++) {
            ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
        }
    }
})();

(function() {
    var ctx = document.getElementById('line-width').getContext('2d');
    
    //lineWidth = value Sets the width of lines drawn in the future.
    //lineCap = type Sets the appearance of the ends of lines.
    //lineJoin = type Sets the appearance of the "corners" where lines meet.
    //miterLimit = value Establishes a limit on the miter when two lines join at a sharp angle, to let you control how thick the junction becomes.
    //getLineDash() Returns the current line dash pattern array containing an even number of non-negative numbers.
    //setLineDash(segments) Sets the current line dash pattern.
    //lineDashOffset = value Specifies where to start a dash array on a line.

    for (var i = 0; i < 10; i++) {
        ctx.lineWidth = 1 + i;

        ctx.beginPath();
        ctx.moveTo(5 + i * 14, 5);
        ctx.lineTo(5 + i * 14, 140);
        ctx.stroke();
    }
})();

(function() {
    var ctx = document.getElementById('line-cap').getContext('2d');

    var lineCap = ['butt', 'round', 'square'];

    // Draw guides
    ctx.strokeStyle = '#09f';
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(140, 10);
    ctx.moveTo(10, 140);
    ctx.lineTo(140, 140);
    ctx.stroke();

  // Draw lines
    ctx.strokeStyle = 'black';

    for (var i = 0; i < lineCap.length; i++) {
        ctx.lineWidth = 15;
        ctx.lineCap = lineCap[i];
        ctx.beginPath();
        ctx.moveTo(25 + i * 50, 10);
        ctx.lineTo(25 + i * 50, 140);
        ctx.stroke();
    }
    
})();

(function() {
    var ctx = document.getElementById('line-join').getContext('2d');

    var lineJoin = ['round', 'bevel', 'miter'];
    ctx.lineWidth = 10;
    for (var i = 0; i < lineJoin.length; i++) {
        ctx.lineJoin = lineJoin[i];
        ctx.beginPath();
        ctx.moveTo(-5, 5 + i * 40);
        ctx.lineTo(35, 45 + i * 40);
        ctx.lineTo(75, 5 + i * 40);
        ctx.lineTo(115, 45 + i * 40);
        ctx.lineTo(155, 5 + i * 40);
        ctx.stroke();
    }    
})();

(function() {
    draw();
})();

function draw() {
    var ctx = document.getElementById('miter-limit').getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, 150, 150);
    
    // Draw guides
    ctx.strokeStyle = '#09f';
    ctx.lineWidth   = 2;
    ctx.strokeRect(-5, 50, 160, 50);
    
    // Set line styles
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 10;

    // check input
    if (document.getElementById('miterLimit').value.match(/\d+(\.\d+)?/)) {
        ctx.miterLimit = parseFloat(document.getElementById('miterLimit').value);
    } else {
        alert('Value must be a positive number');
    }

    // Draw lines
    ctx.beginPath();
    ctx.moveTo(0, 100);
    for (i = 0; i < 24 ; i++) {
        var dy = i % 2 == 0 ? 25 : -25;
        ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
    }
    ctx.stroke();
    return false;    
};

(function() {
    var canvas = document.getElementById('line-dashes');
    var ctx = canvas.getContext('2d');

    var offset = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.setLineDash([4, 2]);
        ctx.lineDashOffset = -offset;
        ctx.strokeRect(10, 10, 100, 100);
    }

    function march() {
        offset++;

        if (offset > 16) {
            offset = 0;
        }

        draw();
        setTimeout(march, 40);
    }

    march();    
})();

(function() {
    var ctx = document.getElementById('linear-gradient').getContext('2d');
    //We create a CanvasGradient object by using one of the following methods. 
    //We can then assign this object to the fillStyle or strokeStyle properties.

    //createLinearGradient(x1, y1, x2, y2) Creates a linear gradient object with a starting point of (x1, y1) and an end point of (x2, y2).
    //createRadialGradient(x1, y1, r1, x2, y2, r2) Creates a radial gradient. The parameters represent two circles, one with its center at (x1, y1) and a radius of r1, and the other with its center at (x2, y2) with a radius of r2.

    //gradient.addColorStop(position, color) Once we've created a CanvasGradient object we can assign colors to it by using the addColorStop() method.

    // Create gradients
    var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
    lingrad.addColorStop(0, '#00ABEB');
    lingrad.addColorStop(0.5, '#fff');
    lingrad.addColorStop(0.5, '#26C000');
    lingrad.addColorStop(1, '#fff');

    var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
    lingrad2.addColorStop(0.5, '#000');
    lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

    // assign gradients to fill and stroke styles
    ctx.fillStyle = lingrad;
    ctx.strokeStyle = lingrad2;

    // draw shapes
    ctx.fillRect(10, 10, 130, 130);
    ctx.strokeRect(50, 50, 50, 50);
})();

(function() {
    var ctx = document.getElementById('radial-gradient').getContext('2d');
    
    // Create gradients
    var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
    radgrad.addColorStop(0, '#A7D30C');
    radgrad.addColorStop(0.9, '#019F62');
    radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');
    
    var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
    radgrad2.addColorStop(0, '#FF5F98');
    radgrad2.addColorStop(0.75, '#FF0188');
    radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');

    var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
    radgrad3.addColorStop(0, '#00C9FF');
    radgrad3.addColorStop(0.8, '#00B5E2');
    radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)');

    var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
    radgrad4.addColorStop(0, '#F4F201');
    radgrad4.addColorStop(0.8, '#E4C700');
    radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)');

    // draw shapes
    ctx.fillStyle = radgrad4;
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = radgrad3;
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = radgrad2;
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = radgrad;
    ctx.fillRect(0, 0, 150, 150);
})();

(function() {
    var ctx = document.getElementById('create-pattern').getContext('2d');
    
    // create new image object to use as pattern
    var img = new Image();
    img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
    img.onload = function() {
        // create pattern
        var pattern = ctx.createPattern(img, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, 150, 150);
    }
})();

(function() {
    var ctx = document.getElementById('shadowed-text').getContext('2d');

    //shadowOffsetX = float Indicates the horizontal distance the shadow should extend from the object.
    //shadowOffsetY = float Indicates the vertical distance the shadow should extend from the object.
    //shadowBlur = float Indicates the size of the blurring effect;
    //shadowColor = color A standard CSS color value indicating the color of the shadow effect; 

    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    
    ctx.font = '20px Times New Roman';
    ctx.fillStyle = 'Black';
    ctx.fillText('Sample String', 5, 30); //text, x, y -> draws a text string at the specified coordinates
})();

(function() {
    var ctx = document.getElementById('fill-rules').getContext('2d');
    
    ctx.beginPath(); 
    ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
    ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
    ctx.fill('evenodd'); //The even-odd winding rule.
    //ctx.fill('nonzero'); //The non-zero winding rule, which is the default rule.
})();