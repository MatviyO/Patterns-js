// Open close Princple
class Shape {
    area() {
        throw new Error('Area method shou;b be im[lemented')
    }
}

class Square extends Shape {
    constructor(size) {
        super()
        this.size = size
    }
    area() {
        return this.size ** 2
    }
}

class Cicle extends Shape{
    constructor(radius ) {
        super()
        this.radius = radius
    }
    area() {
        return (this.radius ** 2) * Math.PI
    }
}
class React extends  Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }
    area() {
        return this.width * this.height
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }
    sum() {
       return this.shapes.reduce((acc, shape) => {
            acc += shape.area()
            return acc
       }, 0)
    }
}
const calc = new AreaCalculator([
    new Square(10),
    new Cicle(1),
    new Square(5),
    new Rect(2,3)
])
calc.sum()


