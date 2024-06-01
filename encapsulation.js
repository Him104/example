class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }


    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName) {
            
        this._name = newName;
    }
}

    displayDetails() {
        console.log(` Name : ${this._name} and age: ${this._age}`);

    }
}

const Person1 = new Person("John", 30);
console.log(Person1.name);
Person1.name = "Jane";
console.log(Person1.name);
Person1.displayDetails();