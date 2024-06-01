// Base Class

class Animal {
    speak(){
        console.log('ye hai apna parent class');
    }
}

//sub class


class Dog extends Animal {
    speak(){
        console.log('ye hai apna 1st subclass');
    }
}

class Cat extends Animal {
    speak(){
        console.log("ye hai apni second subclass")
    }
}


const animals = [new Animal(), new Dog(), new Cat()]

animals.forEach(animal => animal.speak())