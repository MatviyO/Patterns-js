function networkFetch(url) {
    return `${url} -  response`
}
const cache = new Set()

const proxieFetch = new Proxy(networkFetch, {
    apply(target, thisArg, argArray) {
        console.log(target, 'target')
        console.log(thisArg, 'thisArg')
        console.log(argArray, 'argArray')
        const url = argArray[0]
        if (cache.has(url)) {
            return `${url} - response cache`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, argArray)
        }
    }
})
console.log(proxieFetch('angular.io'))

