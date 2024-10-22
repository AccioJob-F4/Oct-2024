/*
// IMPORTANCE OF POLYFILLS
--> Cross-browser compatibility
--> User Experience
--> Progressive Enhancement

// WORKING OF POLYFILLS
--> Feature Detection
--> Implementation
*/



// Polyfill for Array.includes
if(!Array.prototype.includes){
    // polyfill
    Array.prototype.includes = (valueToFind, fromIndex) => {
        if(this==null)
        {
            throw new TypeError(`"this" is null or not defined`);
        }

        var o = Object(this);
        var len = o.length >>> 0; // Bitwise operation to ensure the length is a non-negative integer

        if(len===0)
        {
            return false;
        }

        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        while(k<len)
        {
            if(o[k]===valueToFind)
            {
                return true;
            }
            k++;
        }

        return false;
    };
}

[1, 2, 3, 1, 2, 3].includes(2, -3);