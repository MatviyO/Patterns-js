const car = {
    wheels: 4,

    init() {
        console.log(`i have ${this.wheels}, + ${this.owner}`)
    }
}
const carWithOwner = Object.create(car, {
    owner: {
        value: 'Jpon'
    }
})
console.log( carWithOwner.__proto__ === car)
carWithOwner.init()
