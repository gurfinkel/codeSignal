function reverseInParentheses(inputString) {
    let mainArr = inputString.split('');
    let arrLength = mainArr.length;
    let arr1 = [];
    for(let i = 0; i < arrLength; i++) {
        if(mainArr[i] !== ')') {
            arr1.push(mainArr[i]);
        } else {
            let temp = reverseSelectedString(arr1); // call function to reverse selected string
            arr1 = arr1.splice(0, arr1.lastIndexOf("("));
            arr1 = arr1.concat(temp);
        }
    }
    return arr1.join('');
}

function reverseSelectedString(arrFirst) {
    let arr2 = [];
    let arrLength = arrFirst.length;
    for(let j = arrLength; j >= 0; j--) {
        if(arrFirst[j] !== '(') {
            arr2.push(arrFirst[j]);
        } else {
            break;
        }
    }
    return arr2;
}
