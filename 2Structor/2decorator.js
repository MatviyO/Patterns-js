class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }
    get url() {
        return ` https://${this.ip}:${this.port}`
    }
}
function aws(server) {
    server.isAws = true
    server.awsInfo = function() {
        return server.url
    }
    return server
}
function azure(server) {
    server.isAzure = true
    server.port += 500
    return server
}

const s1 = aws(new Server('12.00.22', '8088'))
console.log(s1.isAws)
console.log(s1.awsInfo())
const s2 = azure(new Server('11.00.11', '1000'))
console.log(s2.isAzure)
console.log(s2.port())
