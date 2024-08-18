const isValid = (s) => {
    let map = { "(" : ")", "[": "]", "{": "}"}
    const stash = []
    for(let i=0; i< s.length; i++) {
        // console.log(stash)
        if(Object.keys(map).includes(s[i])){
            stash.push(s[i])
        } else {
            let prevVal = stash.pop()
            console.log(prevVal, map[prevVal])
            if(s[i] !== map[prevVal]){
                return false
            }
        } 
    }
    return stash.length === 0
};

console.log(isValid('())'))