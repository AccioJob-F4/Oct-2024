/*
Currying
*/

// function add(a, b) {
//      console.log('add: ', a+b)

// }

// add(2, 3);

// function add1(a){
//     return function add2(b) {
//         console.log('add1 -- add2: ', a+b)
//     }
// }

// add1(2)(3);


function multiply(a){
    return function(b) {
        return a*b;
    }
}

const double = multiply(2);
const tripple = multiply(3);

console.log(double(5));
console.log(double(10));

console.log(tripple(5));
console.log(tripple(10));


