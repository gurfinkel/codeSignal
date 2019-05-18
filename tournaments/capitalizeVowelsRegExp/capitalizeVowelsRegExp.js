function capitalizeVowelsRegExp(input) {
    const getLetter = function(letter) {
        if ('a' === letter) return 'A';
        else if ('e' === letter) return 'E';
        else if ('i' === letter) return 'I';
        else if ('o' === letter) return 'O';
        else if ('u' === letter) return 'U';
        else if ('y' === letter) return 'Y';
        else return letter;
    };

    const n = input.length;
    const result = new Array(n);

    [...input].reduce((index, item) => { result[index++] = getLetter(item); return index; }, 0);

    return result.join('');
}
