function integerToEnglishWords(num) {
    const words = {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen',
        20: 'Twenty',
        30: 'Thirty',
        40: 'Forty',
        50: 'Fifty',
        60: 'Sixty',
        70: 'Seventy',
        80: 'Eighty',
        90: 'Ninety'
    }

    const convertBillion = function(number) {
        let n = Math.floor(number / 1e9)
        let x = convertMillion(number % 1e9)

        if(n > 0) return convertMillion(n) + ' Billion' + (x ? ` ${x}` : '')

        return x;
    };

    const convertMillion = function(number) {
        let n = Math.floor(number / 1e6)
        let x = convertThousand(number % 1e6)

        if(n > 0) return convertThousand(n) + ' Million' + (x ? ` ${x}` : '')

        return x;
    };

    const convertThousand = function(number) {
        let n = Math.floor(number / 1e3)
        let x = convertHundred(number % 1e3)

        if(n > 0) return convertHundred(n) + ' Thousand' + (x ? ` ${x}` : '')

        return x;
    };

    const convertHundred = function(number) {
        let n = Math.floor(number / 1e2)
        let x = convertTy(number % 1e2)

        if(n > 0) return words[n] + ' Hundred' + (x ? ` ${x}` : x)

        return x;
    };

    const convertTy = function(number) {
        if(number == 0) return ''
        let n = Math.floor(number / 10)

        if(n == 0) return words[number]
        if(n < 2 || number == 20) return words[number]

        return words[n * 10] + (number % 10 ? ' ' +  words[number % 10] : '')
    };

    if(!num) {
        return 'Zero';
    }

    return convertBillion(num);
}
