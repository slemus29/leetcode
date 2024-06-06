const test = {
    prop: 32,
    func: () => {
        return this.prop
    }
}


// const person = new Test()
 console.log(test.func())