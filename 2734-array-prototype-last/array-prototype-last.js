/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if(this.length===0){
        return -1
    }else { 
    let lastElement = this[this.length-1];
    return lastElement
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */