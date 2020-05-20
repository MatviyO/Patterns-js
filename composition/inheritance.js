// composition vs imitation(inheritance)    //also vue3
class Programmer {
    constructor(name) {
        this.name = name
    }
    code() {
        console.log(`${this.name} coding...`)
    }
}
class Frontend extends Programmer {
    angular() {
        console.log(`${this.name} is creating angular app...`)
    }
}

class Backend extends Programmer {
    nodejs() {
        console.log(`${this.name} is programing nodejs backend...`)
    }
}

class FullStack extends Frontend {

}

const programmer = new Programmer('Alex')
programmer.code()

const frontend = new Frontend('Frontend')
frontend.code()
frontend.angular()

const backend = new Backend('maxim')
backend.code()
backend.nodejs()
