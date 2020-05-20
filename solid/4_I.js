// // interface singlegation principle
//
// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     walk() {
//         console.log(`${this.name} be able wakl`)
//
//     }
//     swim() {
//         console.log(`${this.name} be able swim`)
//
//     }
//     fly() {
//         console.log(`${this.name} be able fly`)
//     }
// }
//
// class Dog extends Animal {
//    fly() {
//        return null
//    }
// }
// class Eagle extends Animal {
//     swim() {
//         return null
//     }
// }
// class Whale extends  Animal{
//      fly() {
//          return null
//      }
//      walk() {
//          return null
//      }
// }
// const dog = new Dog('reks')
// dog.walk()
// dog.swim()
// dog.fly()
//
// const eagle = new Eagle('Orel')
// eagle.fly()
// eagle.swim()
// eagle.walk()
//
// const whale = new Whale('')
// whale.swim()
// whale.fly()
// whale.walk()


class Animal {
    constructor(name) {
        this.name = name
    }
}
const swimmer = {
    swim() {
        console.log(`${this.name} be able swim`)
    }
}
const flier = {
    fly() {
        console.log(`${this.name} be able swim`)
    }
}
const walker = {
    walk() {
        console.log(`${this.name} be able wakl`)
    }
}

class Dog extends Animal {

}

class Eagle extends Animal {

}

class Whale extends Animal {

}
Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)
const dog = new Dog('reks')
dog.walk()
dog.swim()

const eagle = new Eagle('Orel')
eagle.fly()
eagle.walk()

const whale = new Whale('')
whale.swim()
