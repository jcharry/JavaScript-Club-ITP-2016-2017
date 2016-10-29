# This is a class in python to show you what a class
# actually looks like. It's a template, not an object directly
# Classes have specific Constructor functions that get called
# automatically when a new object is created - and in Python
# the __init__ method is the constrcutor function.
class Dog:
    def __init__(self, name):
        self.name = name
        self.tricks = []    # creates a new empty list for each dog

    def add_trick(self, trick):
        self.tricks.append(trick)

print(Dog)
fido = Dog('fido')
spot = Dog('spot')

fido.add_trick('jump')

print(fido.tricks)
print(spot.tricks)
