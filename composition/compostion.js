function createProgramer(name) {
    const programmer = {name: name}
    return {
        ...programmer,
        ...canCode(programmer)
    }
}
function canCode({name}) {
    return {
        code: () => console.log(`${name} coding...`)
    }
}

function canAngular({name}) {
    return {
        angular: () => console.log(`${name} angular app...`)
    }
}
function canBackend({name}) {
    return {
        nodejs: () => console.log(`${name} backend nodejs app...`)
    }
}

function createFrontend(name) {
    const programmer = createProgramer(name)
    return {
        ...programmer,
        ...canAngular(programmer)
    }
}
function createBackender(name) {
    const programmer = createProgramer(name)
    return {
        ...programmer,
        ...canBackend(programmer)
    }
}
function createFullstack(name) {
    const programmer = createProgramer(name)
    return {
        ...programmer,
        ...canBackend(programmer),
        ...canAngular(programmer)
    }
}


const programmer1 = createProgramer('Joh')
programmer1.code()

const frontend = createFrontend('Vill')
frontend.code()
frontend.angular()

const backend = createBackender('SILV')
backend.code()
backend.nodejs()
