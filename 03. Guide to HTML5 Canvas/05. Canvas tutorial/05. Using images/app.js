(function () {
    var ctx = document.getElementById('draw-image').getContext('2d');
    //drawImage(image, x, y) Draws the CanvasImageSource specified by the image parameter at the coordinates (x, y).

    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        ctx.beginPath();
        ctx.moveTo(30, 96);
        ctx.lineTo(70, 66);
        ctx.lineTo(103, 76);
        ctx.lineTo(170, 15);
        ctx.stroke();
    };

    img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
})();

(function () {
    var ctx = document.getElementById('tile-image').getContext('2d');

    var img = new Image();

    img.onload = function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                //This adds the width and height parameters, which indicate 
                //the size to which to scale the image when drawing it
                // onto the canvas.
                ctx.drawImage(img, j * 50, i * 38, 50, 38);
            }
        }
    };

    img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
})();

(function () {
    var ctx = document.getElementById('slice-image').getContext('2d');
    //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

    var img = new Image();

    img.onload = function() {
        ctx.drawImage(img, 40, 80, 100, 100, 25, 25, 100, 100);
    };

    img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
})();

(function () {
    var ctx = document.getElementById('frame-image').getContext('2d');

    Promise.all([
        createImagePromise('https://mdn.mozillademos.org/files/5397/rhino.jpg'),
        createImagePromise('https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png')
    ])
    .then(function(values) {
        ctx.drawImage(values[0], 33, 71, 104, 124, 21, 20, 87, 104);
        ctx.drawImage(values[1], 0, 0);
    })
})();

(function () {
    var table = document.querySelector('.body table');
    
    Promise.all([
        createImagePromise('https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png'),
        createImagePromise('https://mdn.mozillademos.org/files/5399/gallery_1.jpg'),
        createImagePromise('https://mdn.mozillademos.org/files/5401/gallery_2.jpg'),
        createImagePromise('https://mdn.mozillademos.org/files/5403/gallery_3.jpg'),
        createImagePromise('https://mdn.mozillademos.org/files/5405/gallery_4.jpg'),
        createImagePromise('https://mdn.mozillademos.org/files/5407/gallery_5.jpg'),
        createImagePromise('https://mdn.mozillademos.org/files/5409/gallery_6.jpg'),
        createImagePromise('https://mdn.mozillademos.org/files/5411/gallery_7.jpg'),
        createImagePromise('https://mdn.mozillademos.org/files/5413/gallery_8.jpg'),
    ])
    .then(function (values) {
        let row = document.createElement('tr');
        table.appendChild(row)

        for (let i = 1; i < values.length; i++) {            
            const canvas = document.createElement('canvas');
            canvas.setAttribute('width', 132);
            canvas.setAttribute('height', 150);

            const td = document.createElement('td');
            td.appendChild(canvas);

            row.appendChild(td);

            const ctx = canvas.getContext('2d');
            ctx.drawImage(values[i], 15, 20);
            ctx.drawImage(values[0], 0, 0);

            if (i % 4 === 0) {
                row = document.createElement('tr');
                table.appendChild(row)
            }
        }
    })
})();

function createImagePromise(src) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    })
};