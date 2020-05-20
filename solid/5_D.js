//Dependency innversion princple

class Fetch {
    request() {
        // return fetch(url).then(r => r.json())
    return Promise.resolve('data from fetch')
    }
}
class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from localstorage'
        // return localStorage.getItem('key')
        return dataFromLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }
    clientGet() {
        this.fetch.request('vk.com')
    }
}

class LocalStorageClient {
   constructor() {
    this.llocalStorage = new LocalStorage()
   }
   clientGet(key) {
       return this.llocalStorage.get()
   }
}

class Database {
    constructor(client) {
        this.client = client
    }

    getData(key) {
        return this.client.clientGet(key)
    }
}
const db = new Database(new FetchClient())
console.log(db.getData('rand data'))
