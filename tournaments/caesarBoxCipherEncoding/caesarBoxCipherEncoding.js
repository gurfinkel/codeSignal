function caesarBoxCipherEncoding(inputString) {
    const n = Math.sqrt(inputString.length);
    let result = '';

    for (let i = 0; n > i; ++i)
        for (let j = 0; n > j; ++j)
            result += inputString[i + j * n];

    return result;
}


function caesarBoxCipherEncoding(inputString) {

    var n = Math.sqrt(inputString.length);
    var ans = '';
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            ans += inputString[i + j * n];
        }
    }
  
    return ans;
}
    