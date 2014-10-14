function sprite (options) {
	var gravity = 1.4;
    var that = {};
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.x = options.x;
    that.y = options.y;
    that.velocity = 0;
	that.color = "rgb(" + options.red + "," + options.green + "," + options.blue + ")";
	console.log(that.color);
    that.update = function (delta, i, blocks) {
    	var column = Math.floor(that.x / that.width);	
    	var hasNoBlock = blocks.hasNoBlock(column);
    	var currentBottomY = that.y + that.height;
    	if(blocks.falling(column, currentBottomY)) {
    		that.velocity += gravity * delta;
    		that.y += that.velocity;
    	} 
    	else {
    		if(hasNoBlock) {
    			that.y = canvas.height - that.height;
    		} 
    		else {
    			that.y = blocks.firstBlock(column).y - that.height;
    		}
    		blocks.landed(column, i);
    	}	
    };
    that.render = function () {
    	that.context.fillStyle = that.color;
        that.context.fillRect(that.x, that.y, that.width, that.height);
    };
    return that;
}