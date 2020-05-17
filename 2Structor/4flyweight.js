class Car {
    constructor(model, price) {
        this.model = model
            this.price = price
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }

    create(model, price) {
        const candidate = this.getCar(model)
    }
}
