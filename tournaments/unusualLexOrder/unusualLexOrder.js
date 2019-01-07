function unusualLexOrder(words) {
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].split("").reverse().join("")
    }
    
    words.sort((a , b) => {
        return a.localeCompare(b)
    })
    
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].split("").reverse().join("")
    }
    
    return words
}
