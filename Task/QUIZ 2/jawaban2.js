class Animal {
    constructor(name, age, isMamal) {
        this.name = name;
        this.age = age;
        this.isMamal = isMamal;
    }
}

class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true);
    }
    eat() {
        return `${this.name} sedang makan!`;
    }
}

class Eagle extends Animal {
    fly() {
        return `${this.name} sedang terbang!`;
    }
}

const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Elo", 4);

console.log(myRabbit);
console.log(myRabbit.eat());

console.log("");

console.log(myEagle);
console.log(myEagle.fly());
