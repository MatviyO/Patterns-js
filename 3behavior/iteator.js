class MyIterator {
    constructor(data) {
        this.index = 0
        this.data = data
    }
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                   return {
                       value: this.data[this.index++],
                       done: false
                   }
                } else {
                    this.index = 0
                    return {
                        done: true,
                        value: void 0
                    }
                }
            }
        }
    }
}

const itrator = new MyIterator(['This', 'iterator'])
for (const val of itrator) {
    console.log('value', val)
}
