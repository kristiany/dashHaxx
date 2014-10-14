function blocks (options) {
	var that = {};
	that.canvas = canvas;
	that.movingBlocks = new Array();
	that.landedBlocks = new Array();

	that.render = function (delta) {
    	for (var i=0; i<that.movingBlocks.length; i++) {
    		that.movingBlocks[i].update(delta, i, that);
    		that.movingBlocks[i].render();
    	}
    	for (var i=0; i<that.landedBlocks.length; i++) {
    		if(that.landedBlocks[i] != undefined) { // TODO remove??
    			for (var j=0; j<that.landedBlocks[i].length; j++) {
    				that.landedBlocks[i][j].render();
    			}
    		}
    	}
    };
    that.addBlock = function (sprite) {
    	that.movingBlocks.push(sprite);
    };
    that.landed = function (column, movingIndex) {
    	if (that.hasNoBlock(column)) {
    		that.landedBlocks[column] = new Array();
    	}
    	that.landedBlocks[column].unshift(that.movingBlocks.splice(movingIndex, 1).pop());	
    };
    that.hasNoBlock = function (column) {
    	return that.landedBlocks[column] == undefined || that.landedBlocks[column][0] == undefined;
    };
    that.falling = function (column, currentBottomY) {
    	var hasNoBlock = that.hasNoBlock(column);
    	return !hasNoBlock && currentBottomY < that.landedBlocks[column][0].y || hasNoBlock && currentBottomY < that.canvas.height
    };
    that.firstBlock = function (column) {
        return that.landedBlocks[column][0];
    }; 
    return that;
}