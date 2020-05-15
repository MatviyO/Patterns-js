class SimpleMemberShip {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandartMemberShip {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMemberShip {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMemberShip,
        standart: StandartMemberShip,
        premium: PremiumMemberShip
    }

    create(name, type = 'simple') {
        const MemberShip = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new MemberShip(name)
        member.type = type
        member.define = function() {
            console.log(`${this.name}, ${this.cost}, ${this.type}`)
        }
        return member
    }
}
const factory = new MemberFactory()
const members = [
    factory.create('Vladilen', 'simple'),
    factory.create('elena', 'premium'),
    factory.create('Jon', 'standart'),
    factory.create('Alen', 'premium')
]

members.forEach(m => {
    m.define()
})












