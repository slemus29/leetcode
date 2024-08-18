const getLongestChar = (string) => {
    const stringArray = string.split('');
    let total = 0
    let map = []
    let letters = []
    let flag = 1;

    
    for(let i=0; i<= string.length; i++) {
        if(string[i] !== string[i + 1]){
            total += 1;
            letters.push(string[i])
        } else {
            map.push({ letters, total })
            total = 0;
            flag = flag + 1;
            letters = []
        }
        
    }

    let result = []
    let acc = 0

    map.forEach(item => {
        if(item.total > acc) {
            result = item.letters
            acc = item.total
        }
    })

    return result

}



console.log(getLongestChar("ABCDEFGDDEFGHIJKL"))