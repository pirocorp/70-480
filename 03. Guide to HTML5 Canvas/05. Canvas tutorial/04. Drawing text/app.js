//fillText(text, x, y [, maxWidth]) Fills a given text at the given (x,y) position. 
(function() {
    var ctx = document.getElementById('fill-text').getContext('2d');

    //font = value The current text style being used when drawing text. 
    //This string uses the same syntax as the CSS font property.
    //The default font is 10px sans-serif.
    ctx.font = '48px serif';
    ctx.fillText('Hello world', 10, 50);
})();

//strokeText(text, x, y [, maxWidth]) Strokes a given text at the given (x,y) position.
(function() {
    var ctx = document.getElementById('stroke-text').getContext('2d');
    
    ctx.font = '48px serif';
    ctx.strokeText('Hello world', 10, 50);
})();

(function() {
    var ctx = document.getElementById('baseline-text').getContext('2d');
    //textAlign = value
    //Text alignment setting. Possible values: start, end, left, right 
    //or center. The default value is start.

    //textBaseline = value
    //Baseline alignment setting. Possible values: top, hanging, middle, 
    //alphabetic, ideographic, bottom. The default value is alphabetic.

    //direction = value
    //Directionality. Possible values: ltr, rtl, inherit. The default 
    //value is inherit.

    ctx.font = '48px serif';
    ctx.textBaseline = 'hanging';
    ctx.strokeText('Hello world', 0, 100);
})();