const superReducedString = (s) =>  {
    let finalString = s.split('')

    
    for(let i = 0; i < s.length ; i++) {
        console.log(finalString[i])
        console.log( finalString[i+1])
        if(finalString[i] === finalString[i+1] &&  finalString[i+1] !== undefined) {
            finalString.splice(i, 2)
            i = -1
        }
    }


    return finalString.length ? finalString.join('') : 'Empty String'
}

// console.log(superReducedString('zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh'))
console.log(superReducedString('baab'))
