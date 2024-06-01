// Abstract Class

class Animal {
    makeSound(){
        throw new Error ("this method should be overidden by subclasses")
    }
}

//sub class


class Dog extends Animal {
    makeSound(){
        console.log('Woof Woof');
    }
}

class Cat extends Animal {
    makeSound(){
        console.log("Meow!! Meow!!")
    }
}


const myDog =  new Dog()

myDog.makeSound()

const myCat = new Cat()
myCat.makeSound()   

const myAnimal = new Animal()
myAnimal.makeSound()