// arr.map(callback(element, index){})

if(!Array.prototype.map){
    Array.prototype.map = (callback, thisArg) => {
        if(this==null){
            throw new TypeError('Array.prototype.map called on null or undefined');
        }

        var o = Object(this)
        var len = o.length >>> 0;

        if(typeof callback !== 'function'){
            throw new TypeError('callback is not a function');
        }

        var T = thisArg;
        var A = new Array(len);

        for(var k=0 ; k<len ; k++)
        {
            if(k in o){
                var kValue = o[k];
                var mappedValue = callback.call(T, kValue, k, o);
                A[k] = mappedValue;
            }
        }
        return A;
    }
}

