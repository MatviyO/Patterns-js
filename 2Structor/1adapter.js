class OldCalc {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return t1 + t2
            case 'sub':
                return t1 - t2
            default:
                return NaN
        }
    }
}
class NewCals {
    add(t1, t2) {
        return t1 + t2
    }
    sub(t1,t2) {
        return t1 - t2
    }
}

class CaclAdapter {
    constructor() {
        this.calc = newCalc()
    }
    operations(t1, t2, operations) {
        switch (operation) {
            case 'add':
                return this.calc.add(t1, t2)
            case 'sub':
                return this.calc.sub(t1, t2)
            default:
                return NaN
        }
    }
}
const oldCals = new OldCalc()
console.log(oldCals.operations(10,5, 'add'))

const newcalc = new NewCals()
console.log(newcalc.add(10,5))
