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
    that.update = function (delta, i, moving, landed) {
    	var column = Math.floor(that.x / that.width);	
    	var firstBlock = landed[column] == undefined || landed[column][0] == undefined;
    	var currentBottomY = that.y + that.height;
    	if(!firstBlock && currentBottomY < landed[column][0].y || firstBlock && currentBottomY < canvas.height) {
    		that.velocity += gravity * delta;
    		that.y += that.velocity;
    	} 
    	else {
    		if(firstBlock) {
    			that.y = canvas.height - that.height;
    			landed[column] = new Array();
    		} 
    		else {
    			that.y = landed[column][0].y - that.height;
    		}
    		landed[column].unshift(moving.splice(i, 1).pop());
    	}	
    }
    that.render = function () {
    	that.context.fillStyle = that.color;
        that.context.fillRect(that.x, that.y, that.width, that.height);
    };
    return that;
}