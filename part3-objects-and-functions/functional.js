/* eslint-disable */ // <------- IGNORE THIS LINE!

// Functional programming
var box = document.createElement('div');
box.style.backgroundColor = 'black';
box.style.position = 'absolute';
box.style.width = '100px';
box.style.height = '100px';
document.body.appendChild(box);

// If you find yourself repeating code, the best thing to do
// is to wrap that code in a function to make it much more reusable
function moveBox(b, x, y) {
    b.style.top = x + 'px';
    b.style.left = y + 'px';
}

// Functions also allow us to abstract things that we dont' want to remember
// how to do.  Let's say we were doing some complex calculations to figure out
// the future location of the box based on it's current position and it's
// speed,
// we'd wrap that calculation in it's own function so that we only have to
// figure out how to do the calculations once, then we can just reuse it over
// and over
function changeColor(b, color) {
    b.style.backgroundColor = color;
}

moveBox(box, 10, 10);

// Set timeout is a good simple example of functional programming
// it takes 2 things as arguments, a function to execute, and a number that
// represents the time it should wait (in milliseconds) before funning the
// passed function. That's what functional programming is all about, passing
// functions to other functions.
setTimeout(function() {
    moveBox(box, 100, 100);
}, 2000);

var colors = ['blue', 3, 'orange', 'red', 'purple'];
var continents = ['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Australia', 'Antarctica'];

// I hate for loops, and I want a functional way to do it
// So I wrap a for loop in a function, that takes an array and another function
// then for each item in the passed in array, I want to execute the function
// I passed in on the array item
function forEach(array, fn) {
    var retArray = [];
    for (var i = 0; i < array.length; i++) {
        // Use the passed in function 'fn' on each array item
        retArray.push(fn(array[i]));
    }

    return retArray;
}

// this for each pattern is so nice that Javascript provides it for us
// automatically
// It also gives us a few more array functions - map, filter, reduce (look them
// up if you're curious, they can be very useful)
colors.forEach(function(elt, i, array) {
    console.log(elt);
});

// Map is another array iterator that returns a new array
var notColors = colors.map(function(color, i, array) {
    // The new items in the array will consist of whatever items are returned
    // inside this function
    return 'NOT ' + color;
});

// Filter returns a new array by removing some items from passed in array if
// they don't meet some test
var colorsWithoutIntegers = colors.filter(function(color) {
    // If this function returns true, the array item is kept, otherwise it's
    // not kept. NOTE: This doesn't affect the original array!
    if (typeof color === 'number') {
        return false;
    } else {
        return true;
    }
});
console.log(colors);
console.log(notColors);
console.log(colorsWithoutIntegers);

function upperCaseAndLog(string) {
    var s = string.toUpperCase()
}

function isString(str) {
    var ret = (typeof str === 'string');
    return ret;
}

function isNumber(num) {
    var ret = (typeof num === 'number');
    return ret;
}

function isObject(obj) {
    var ret = (typeof obj === 'object');
    return ret;
}

// This is tricky.  It's a function that modifies other functions.  It takes
// a function as an argument, creates a new function that calls the passed in
// function, modifies the result in some way, then returns the new version of
// the function
// This specific example negates a function that returns a boolean value
function negate(fn) {

    function negatedFn(arg) {
        var retVal = fn(arg);
        return !retVal;
    }

    return negatedFn;
}

var isNotString = negate(isString);
var isNotObject = negate(isObject);
var isNotNumber = negate(isNumber);

var s = 'string';
console.log(isString(s));
console.log(isNotString(3));

// I can also pass functions in directly to our array iterators.
var result = forEach(colors, isNotString);
console.log(result);
// Do other stuff
//forEach(continents);

