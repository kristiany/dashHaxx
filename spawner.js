function spawner (options) {
	that = {};
	that.color1Red = randomColorUnit();
    that.color1Green = randomColorUnit();
    that.color1Blue = randomColorUnit();
    that.color2Red = randomColorUnit();
    that.color2Green = randomColorUnit();
    that.color2Blue = randomColorUnit();
    that.canvas = options.canvas;
    that.blockWidth = options.blockWidth;
    that.blockHeight = options.blockHeight;
    that.spawn = function (blocks, x, y) {
    	var red = linear(Math.random(), that.color1Red, that.color2Red);
		var green = linear(Math.random(), that.color1Green, that.color2Green);
		var blue = linear(Math.random(), that.color1Blue, that.color2Blue);
    	blocks.addBlock(sprite({
		    context: that.canvas.getContext("2d"),
		    x: x,
		    y: y,
		    width: that.blockWidth,
		    height: that.blockHeight,
		    red: red,
		    green: green,
		    blue: blue
		}));
    }
    function linear(t, color1, color2) {
    	return Math.floor(color1 * (1 - t) + t * color2);
    }
    function randomColorUnit() {
    	return Math.floor(Math.random() * 256);
    }
    return that;
}