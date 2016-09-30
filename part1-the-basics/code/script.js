// Get HTML tag with id 'heading'
var heading = document.getElementById('heading');

// Change it's color to blue
// Note, css styles are stored on the 'style' object
heading.style.color = 'blue';

// Add click handler to the HTML element
// This is how we respond to user interaction
heading.onclick = function(e) {
    console.log('clicked heading');
}

// Functions are variables (well, they're objects, really), but in javascript,
// everything is an object
// Because of this, they can be
// passed into other functions, just like
// variables
function hello() {
    console.log('hello');
}

// Another way of defining a function,
// this way makes it clear that functions can
// be treated just like variables
var sayHi = function() {
    console.log('hi');
};

// Another way to add a click handler
// note here we write 'click', rather than
// 'onclick' like above. It's weird and dumb
// but something to just get used to
heading.addEventListener('click', hello);

// The 'this' variable changes it's meaning
// depending on where it's used
// At the top level it refers to the global
// Window object (which houses literally
// everything in your program)
console.log(this);

// Create and object, and create a function
// on that object called greet.  Use the 'this'
// keyword to get a reference to itself, so
// we can access the 'x' property
var obj = {
    x: 10,
    greet: function(greeting) {
        console.log(this.x);
    },
};

console.log(obj);




