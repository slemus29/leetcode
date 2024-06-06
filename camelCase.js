const camelcase = (s) => {
    let totalOfCases = 0
    for (const letter of s) {
        if(letter.toUpperCase() === letter) {
            totalOfCases ++
        }
    }
    return totalOfCases
}


console.log(camelcase('camelCase'))