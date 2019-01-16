function fileNaming(names) {
    var calculateHash = function(inputString) {
        const P = 997;
        const M = 28001;
        var hashValue = 0;
        for (var i = 0; i < inputString.length; i++) {
            hashValue = (hashValue * P + inputString.charCodeAt(i)) % M;
        }
        return hashValue;
    };
  
    /*
        Information about the string in the hash map
        is stored in the following way:
        [string itself,
         its hash,
         the smallest possible integer to use with this name]
    */
    const hashMapSize = names.length * 2;
    var hashMap = [];
    var result = [];
  
    var searchHM = function(position, hash) {
        while (hashMap[position][0] !== ''
            && hashMap[position][1] !== hash) {
            position = (position + 1) % hashMapSize;
        }
        return position;
    };
  
    for (var i = 0; i < hashMapSize; i++) {
        hashMap.push(['', -1, 0]);
    }
  
    for (var i = 0; i < names.length; i++) {
        var hash = calculateHash(names[i]);
        var startPos = searchHM(hash % hashMapSize, hash);
        if (hashMap[startPos][0] === '') {
            hashMap[startPos] = [names[i], hash, 1];
            result.push(names[i]);
        }
        else {
            var newName = names[i] + '(' + hashMap[startPos][2] + ')';
            var newNameHash = calculateHash(newName);
            var position = searchHM(newNameHash % hashMapSize, newNameHash);

            while (hashMap[position][0] !== '') {
                hashMap[startPos][2]++;
                newName = names[i] + '(' + hashMap[startPos][2] + ')';
                newNameHash = calculateHash(newName);
                position = searchHM(newNameHash % hashMapSize, newNameHash);
            }
            hashMap[position] = [newName, newNameHash, 1];
            result.push(newName);
            hashMap[startPos][2]++;
        }
    }
    return result;
}
    