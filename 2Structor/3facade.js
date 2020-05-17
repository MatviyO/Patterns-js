class Complains {
    constructor() {
        this.complains = []
    }
    reply(complaint) {

    }
    add(complaint) {
        this.complains.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaint extends  Complains {
    reply({id, customer, details}) {
        return `Product${id}: ${customer}(${details})`
    }
}
class ServiceComplains extends  Complains {
    reply({id, customer, details}) {
        return `Product${id}: ${customer}(${details})`
    }
}
class CompaintRegistry {
    register(customer, details, type) {
        const id = Date.now()
        let complaint
        if (type === 'service') {
            complaint = new ServiceComplains()
        } else {
            complaint = new ProductComplaint()
        }
        return complaint.add({id, customer, details})
    }
}
const regist = new CompaintRegistry()
console.log(regist.register('jon', 'servie', 'not found'))







