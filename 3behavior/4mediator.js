class User {
    constructor(name) {
        this.name = name
        this.room = null
    }
    send(message, to) {
        this.room.send(message, this, to)
    }
    receive(message, from) {
        console.log(`${from.name}`)
    }
}
class ChatRoom {
    constructor() {
        this.users = {}
    }
    register(user) {
        this.users[user.name] = user
        user.room = this
    }
    send(message, from ,to) {
        if (to) {
            to.receive(message,from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}
const jon = new User('jon')
const karek = new User('karek')
const welldone = new User('welldone')
const room = new ChatRoom()

room.register(jon)
room.register(karek)
room.register(welldone)

jon.send('hey', karek)
karek.send('hey авпвп', jon)
