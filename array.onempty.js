'use strict';
if(!Array.prototype.hasOwnProperty('onEmpty')) {
    Array.prototype.onEmpty = function(cb){
        var O = Object(this);
        if(O.length === 0){
            cb(O);
        }
        return O;
    };
}