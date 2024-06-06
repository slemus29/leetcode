const array = [[{id: "1"}], [{id: "2"}], undefined]
const array1 = ["1", "2"]

const newarray = array.filter(item => {
    return (item && item.every(element => element.id !== "1"))
})

const newarray1 = array.filter(item => item !== "1")


console.log(newarray)
console.log(newarray1)