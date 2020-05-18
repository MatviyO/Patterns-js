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
}
