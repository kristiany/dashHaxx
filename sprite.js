function sprite (options) {
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
    	var column = Math.floor(that.x / 64);	
    	if(landed[column] != undefined && landed[column][0] != undefined && that.y + that.height < landed[column][0].y
    		|| (landed[column] == undefined || landed[column][0] == undefined) && that.y + that.height < canvas.height) {
    		that.velocity += gravity * delta;
    		that.y += that.velocity;
    	} 
    	else {
    		if(landed[column] == undefined || landed[column][0] == undefined) {
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