/* eslint-disable */ // <------- IGNORE THIS LINE!

// What is an object?
// Everything is an object (or a primative - i.e. number, string, bool);
var x = 3;

// x is a number
// But it's also an object, check it out in the browser
// It's basically the same as doing this:
var X = new Number(3);

var s = 'a string primative';
var S = new String('a string object');
// In particular with strings, notice how the Object variant stores each
// character of the string as a property on an object.

// NOTE: I'm just showing you that strings and numbers are actually Objects
// under the hood, but when you're actually coding, don't create primatives
// using the 'new Number' or 'new String' syntax.

// We can do the same with objects
// i.e. use new Object() or new Array() - but don't actually do that in
// practice, use the literal notation instead ( {} and [] )

// Object literal
var o = {
    myStr: 'im a string',
    myNum: 3,
    myFunc: function(anArgument) {
        console.log(anArgument);
    },
    myObj: {
        anotherProp: 'Im another string'
    }
};

// What is Object Oriented Programming?
// In the simplest sense, it's a way of imitating real world things, like
// people, or cars, and keeping track of small differences between individual
// things while also keeping track of the similarities
// One of the fundamental principles of OOP is inheritance, the idea that
// things inherit properties from other things

var animal = {
    numberOfLegs: 0,
    soundIMake: '',
    speak: function() {
        console.log(this.soundIMake);
    },
    jump: function() {
        console.log('jump');
    },
    addLeg: function(n) {
        this.numberOfLegs = this.numberOfLegs + 1;
    }
};

// Inheritance -> cat and spider INHERIT properties and methods from animal
// meaning they have access to all the stuff that animals can do
var cat = Object.create(animal);
cat.numberOfLegs = 4;
cat.soundIMake = 'meow';
var spider = Object.create(animal);
spider.numberOfLegs = 8;
spider.soundIMake = 'scritch';

// Another way to create objects
// Constructor function
function Animal(numLegs, sound) {
    console.log(this);
    this.numberOfLegs = numLegs;
    this.soundIMake = sound;
}

Animal.prototype = {
    speak: function() {
        console.log(this.soundIMake);
    },
    jump: function() {
        console.log('jump');
    }
};

console.log('CALLING CONSTRUCTOR --------');
var cat = new Animal(4, 'meow');
var spider = new Animal(8, 'scritch');


var c = {
    numberOfLegs: 4,
    soundIMake: 'meow',
    speak: function() {
        console.log(this.soundIMake);
    }
};

var s = {
    numberOfLegs: 8,
    soundIMake: 'scritch',
    speak: function() {
        console.log(this.soundIMake);
    }
};

console.log(animal, cat, spider);



// Classical Object Orientated Programming uses classes (JavaScript DOES NOT
// use classes)
// Classical example
// THIS IS PSUEDOCODE, IT"S NOT REAL CODE IN ANY LANGUAGE,
// it just shows the basic outline of a class
//class Building(address, numRooms, owner) {
    //self.address = address;
    //self.numRooms = numRooms;
    //self.owner = owner;

    //self.logOwner = function() {
        //print self.owner;
    //}

    //self.addRooms = function(numRoomsToAdd) {
        //self.rooms += numRoomsToAdd;
    //}
//}
// Again, I want to stress that the above code is NOT VALID JAVASCRIPT, or any
// other language, it's just psuedocode

// Python Example
//class Dog:
    //def __init__(self, name):
        //self.name = name
        //self.tricks = []    # creates a new empty list for each dog

    //def add_trick(self, trick):
        //self.tricks.append(trick)

//fido = Dog('fido')
//spot = Dog('spot')

// A class acts like a template, we create individual (called instances) by
// using the template and giving it specifics about our object
// Create a few new Buildings
//var building1 = new Building('1 Blue Jay Way', 100, 'Enron');
//var building2 = new Building('42 Hitchikers Ave', 42, 'Haliburton');

// building1 and building2 are two distinct buildings, they share a similar
// structure (they have an address, a number of rooms, and an owner), but the
// details vary between the two buildings.

// In the classical scheme, the class itself is not an Object, it's just
// a Template. You only use the class to create new instances, or objects

// Javascript is weirdly different.  It doesn't have classes, it ONLY has
// Objects.  So instead of classes being used to create Objects, Objects are
// created by using a different object as a template. The difference is subtle,
// but important, in that template objects are still objects, and can be acted
// up just like any other object. I can change the template object, and it will
// affect all the objects created from the template.
//
// Confusingly, it also has a few different ways to create Objects, which can
// lead to a bunch of confusion.  You'll likely see the following:
//  1. new SomeObj();
//  2. Object.create(someObj);

// this IS valid JavaScript
var building = {
    numRooms: 100,
    owner: 'Enron',
    address: '1 Blue Jay Way',
    logOwner: function() {
        console.log(this.owner);
    },
    addRooms: function(numRoomsToAdd) {
        this.numRooms = this.numRooms + numRoomsToAdd;
    }
};

// I can't call building with the 'new' keyword, and we'll see why in a bit,
// but for now, I'm going to do things the second way
var building1 = Object.create(building);
var building2 = Object.create(building);

building1.address = '1 Inifinity Drive';
building1.numRooms = 850;
building1.owner = 'Apple';
