const getIndexes = (string) => {
    let indexes = []
    for(let i=0; i< string.length ; i++) {
        indexes.push(string[i].charCodeAt())
    }
}


const groupAnagrams = (strs) => {
    const map = {}


    for(str of strs) {
        const key = str.split('').sort().join('')
        // console.log(map)
        if(map[key]){
            map[key].push(str)
        } else {
            map[key] = [str]
        }
    }
    return Object.values(map)
}


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))